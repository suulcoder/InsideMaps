import { combineReducers } from 'redux';
import omit from 'lodash/omit';

import * as types from '../types/map';
import union from 'lodash/union'

export const byId = (state = {}, action) => {
  switch (action.type) {
    case types.CREATE_MAP_STARTED: {
      const newState = { ...state };
      newState[action.payload._id] = {
        ...action.payload,
        isConfirmed: false,
      }
      return newState;
    }
    case types.CREATE_MAP_COMPLETED: {
      const { oldId, map } = action.payload;
      const newState = omit(state, oldId);
      newState[map._id] = {
        ...map,
        isConfirmed: true,
      }
      return newState;
    }
    case types.FETCH_MAP_COMPLETED: {
      const { entities, order } = action.payload;
      const newState = { ...state };
      order.forEach(id => {
        newState[id] = {
          ...entities[id],
          isConfirmed: true,
        };
      });
      return newState;
    }
    case types.UPDATE_MAP_STARTED: {
      const { id, map } = action.payload;
      const newState = {...state};
      newState[id] = {...map, isConfirmed:false};
      return newState;
    }

    case types.UPDATE_MAP_COMPLETED: {
      const { id } = action.payload;
      const newState = { ...state};
      newState[id].isConfirmed = true;
      return newState;
    }
    case types.DELETE_MAP_STARTED: {
      return omit(state, action.payload.id);
    }
    default: {
      return state;
    }
  }
};

const order = (state = [], action) => {
  switch (action.type) {
    case types.CREATE_MAP_STARTED: {
      return [...state, action.payload._id];
    }
    case types.CREATE_MAP_COMPLETED: {
      const { oldId, map } = action.payload;
      return state.map(id => id === oldId ? map._id : id);
    }
    case types.FETCH_MAP_COMPLETED: {
      //return [...state, ...action.payload.order];
      return union(...state, action.payload.order);
    }
    case types.DELETE_MAP_STARTED: {
      return state.filter(id => id !== action.payload.id);
    }
    default: {
      return state;

    }
  }
};

const isFetching = (state = false, action) => {
  switch (action.type) {
    case types.FETCH_MAP_STARTED: {
      return true;
    }
    case types.FETCH_MAP_COMPLETED: {
      return false;
    }
    case types.FETCH_MAP_FAILED: {
      return false;
    }
    default: {
      return state;

    }
  }
};

const isUpdating = (state=null, action) => {
  switch (action.type) {
    case types.UPDATE_MAP_STARTED : {
      return true
    }
    default : {
      return state;
    }
  }
}


const error = (state = null, action) => {
  switch (action.type) {
    case types.CREATE_MAP_FAILED: {
      return action.payload.error;
    }
    case types.FETCH_MAP_FAILED: {
      return action.payload.error;
    }
    case types.DELETE_MAP_FAILED: {
      return action.payload.error;
    }
    default: {
      return state;
    }
  }

};

const selectedMap = (state = null , action) => {
  switch (action.type) {
    case types.SELECT_MAP : {
      return action.payload.id;
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  byId,
  order,
  isFetching,
  isUpdating,
  selectedMap,
  error,
});


export const getMap = (state, id) => state.byId[id];
export const getMaps = state => state.order.map(id => getMap(state, id));
export const getCreateError = state => state.error;
export const getIsFetching = state => state.isFetching;
export const getIsUpdating = state => state.isUpdating;
export const getSelectedMap = state => getMap(state, state.selectedMap);


