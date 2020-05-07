import { combineReducers } from 'redux';
import omit from 'lodash/omit';

import * as types from '../types/map';



const byId = (state = {}, action) => {
  switch(action.types){
    case types.CREATE_MAP_STARTED: {
      const newState = {...state};
      newState[action.payload.id] = {
        ...action.payload,
        isConfirmed: false,
      }
      return newState;
    }
    case types.CREATE_MAP_COMPLETED: {
      const { oldId, map } = action.payload;
      const newState = omit(state, oldId);
      newState[map.id] = {
        ...map, 
        isConfirmed: true,
      }
      return newState;
    }
    case types.FETCH_MAP_COMPLETED: {
      const { entities, order } = action.payload;
      const newState = {...state};
      order.forEach(id =>{
        newState[id] = {
        ...entities[id],
        isConfirmed: true,
        }
      return newState;
      });
    }
    case types.REMOVE_MAP_STARTED: {
      return omit(state, action.payload.id);
    }
  }
  return state;
};

const order = (state=[], action) => {
  switch(action.types){
    case types.CREATE_MAP_STARTED: {
      return [...state, action.payload.id];
    }
    case types.CREATE_MAP_COMPLETED: {
      const { oldId, map } = action.payload;
      return state.map(id => id === oldId ? map.id : id);
    }
    case types.FETCH_MAP_COMPLETED:{
      return [...state, ...action.payload.order];
    }
    case types.REMOVE_MAP_STARTED: {
      return state.filter(id => id !== action.payload.id);
    }
  }
  return state;
};

const isFetching = (state=false, action) => {
  switch(action.type){
    case types.FETCH_MAP_COMPLETED: {
      return false;
    }
    case types.FETCH_MAP_STARTED: {
      return true;
    }
    case types.FETCH_MAP_FAILED: {
      return false;
    }  
  }
  return state
}

const error = (state=null, action) => {
  switch(action.type){
    case types.CREATE_MAP_FAILED: {
      return action.payload.error;
    }
    case types.FETCH_MAP_FAILED: {
      return action.payload.error;
    }
    case types.REMOVE_MAP_FAILED: {
      return action.payload.error;
    }
  }
  return state;
};

export default combineReducers({
  byId,
  order,
  isFetching,
  error,
});

//selectors
export const getMap = (state, id) => state.byId[id];
export const getMaps = state => state.order.map(id => getMap(state, id));
export const isFetchingMap = state => state.isFetching;
export const getFetchingMapError = state => state.error;
