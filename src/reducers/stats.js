import { combineReducers } from 'redux';
import * as types from '../types/stats';

const data = (state=null, action) => {
    switch(action.type) {
        case types.FETCH_STATS_COMPLETED : {
            const newState = action.payload.data;
            return newState;
        }
        default: {
            return state;
        }
    }
}

const error = (state=null, action) => {
    switch (action.type) {
        
        case types.FETCH_STATS_STARTED : {
            return null;
        }
        
        case types.FETCH_STATS_COMPLETED : {
            return null;
        }
        case types.FETCH_STATS_FAILED : {
            return action.payload.error;
        }
        default: {
            return state;
        }
    }
}

const isFetching = (state=false, action) => {
    switch (action.type) {
        case types.FETCH_STATS_STARTED: {
            return true;
        }
        
        case types.FETCH_STATS_COMPLETED: {
            return false;
        }

        case types.FETCH_STATS_FAILED: {
            return false;
        }

        default: {
            return state;
        }
    }
}

export default combineReducers({
    data,
    error,
    isFetching,
});

export const getStats = state => state.data;
export const getIsFetchingStats = state => state.isFetching;
export const getErrorFetchStats = state => state.error;