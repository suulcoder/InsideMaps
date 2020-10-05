import { combineReducers } from 'redux';
import * as types from '../types/reports';

const data = (state=null, action) => {
    switch(action.type) {
        case types.FETCH_ERROR_DATA_COMPLETED : {
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
        
        case types.FETCH_ERROR_DATA_STARTED : {
            return null;
        }
        
        case types.FETCH_ERROR_DATA_COMPLETED : {
            return null;
        }
        case types.FETCH_ERROR_DATA_FAILED : {
            return action.payload.error;
        }
        default: {
            return state;
        }
    }
}

const isFetching = (state=false, action) => {
    switch (action.type) {
        case types.FETCH_ERROR_DATA_STARTED: {
            return true;
        }
        
        case types.FETCH_ERROR_DATA_COMPLETED: {
            return false;
        }

        case types.FETCH_ERROR_DATA_FAILED: {
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

export const getErrorData = state => state.data;
export const getIsFetchingErrorData = state => state.isFetching;
export const getErrorFetchError = state => state.error;