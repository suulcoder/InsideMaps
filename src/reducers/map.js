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
  }
  return state;
};

const isFetching = (state=false, action) => {
  return state;
  }


const error = (state=null, action) => {
  switch(action.type){
    case types.CREATE_MAP_FAILED: {
      return action.payload.erro;
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


export const getMap = (state, id) => state.byId[id];
export const getMaps = state => state.order.map(id => getMap(state, id));
export const getCreateError = state => state.error;

