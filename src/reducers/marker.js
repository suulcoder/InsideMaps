import omit from 'lodash/omit';
import { combineReducers } from 'redux';

import * as types from '../types/maker';


const byId = (state = {}, action) => {
  switch(action.type) {
    case types.MARKERS_FETCHING_COMPLETED: {
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
    case types.MARKERS_FETCHING_BY_MAP_COMPLETED: {
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
    case types.MARKER_ADDITION_STARTED: {
      const newState = { ...state };
      newState[action.payload.id] = {
        ...action.payload,
        isConfirmed: false,
      };
      return newState;
    }
    case types.MARKER_ADDITION_COMPLETED: {
      const { oldId, marker } = action.payload;
      const newState = omit(state, oldId);
      newState[marker.id] = {
        ...marker,
        isConfirmed: true,
      };
      return newState;
    }
    default: {
      return state;
    }
  }
};

const order = (state = [], action) => {
  switch(action.type) {
    case types.MARKERS_FETCHING_COMPLETED: {
      return action.payload.order;
    }
    case types.MARKERS_FETCHING_BY_MAP_COMPLETED: {
        return action.payload.order;
      }
    case types.MARKER_ADDITION_STARTED:{
        return [...state, action.payload.id] 
    }
    case types.MARKER_ADDITION_COMPLETED: {
      const { oldId, marker } = action.payload;
      return state.map(id => id === oldId ? marker.id : id);
    }
    default: {
      return state;
    }
  }
};

const isFetching = (state = false, action) => {
  switch(action.type) {
    case types.MARKERS_FETCHING_STARTED: {
      return true;
    }
    case types.MARKERS_FETCHING_COMPLETED: {
      return false;
    }
    case types.MARKERS_FETCHING_FAILED: {
      return false;
    }
    case types.MAKER_FETCHING_BY_MAP_STARETED: {
      return true;
    }
    case types.MARKERS_FETCHING_BY_MAP_COMPLETED: {
      return false;
    }
    case types.MARKERS_FETCHING_BY_MAP_FAILED: {
      return false;
    }
    case types.MARKER_ADDITION_STARTED: {
      return true;
    }
    case types.MARKER_ADDITION_COMPLETED: {
      return false;
    }
    case types.MARKER_ADDITION_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

const error = (state = null, action) => {
  switch(action.type) {
    case types.MARKERS_FETCHING_FAILED: {
      return action.payload.error;
    }
    case types.MARKER_ADDITION_FAILED:{
        return action.payload.error;
    }
    case types.MARKERS_FETCHING_BY_MAP_FAILED:{
        return action.payload.error;
    }
    case types.MARKERS_FETCHING_COMPLETED: {
      return null;
    }
    case types.MARKER_ADDITION_COMPLETED: {
      return null;
    }
    case types.MARKERS_FETCHING_BY_MAP_COMPLETED: {
        return null;
    }
    case types.MAKER_FETCHING_BY_MAP_STARETED: {
        return null;
    }
    case types.MARKER_ADDITION_STARTED: {
        return null;
    }
    case types.MARKERS_FETCHING_STARTED: {
        return null;
    }
    default: {
      return state;
    }
  }
};


export default combineReducers({
  byId,
  order,
  isFetching,
  error,
});

export const getMarker = (state, id) => state.byId[id];
export const getMarkers = state => state.order.map(id => getMarker(state, id));
export const getisFetchingMarker = state => state.isFetching;
export const getError_Marker = state => state.error;
