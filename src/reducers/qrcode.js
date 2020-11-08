import { combineReducers } from 'redux';

import * as types from '../types/qrcode';

const data = (state={}, action) => {
    switch(action.type) {
        case types.FETCH_QR_DATA_COMPLETED : {
            const newState = {...state, ...action.payload.data};
            return newState;
        }

        default: {
            return state;
        }
    }
}

const order = (state=[], action) => {
    switch(action.type) {
        case types.FETCH_QR_DATA_COMPLETED : {
            const newState = action.payload.order;
            return newState;
        }
        default: {
            return state;
        }
    }
}

const error = (state=null, action) => {
    switch (action.type) {
        
        case types.FETCH_QR_DATA_STARTED : {
            return null;
        }
        
        case types.FETCH_QR_DATA_COMPLETED : {
            return null;
        }
        case types.FETCH_QR_DATA_FAILED : {
            return action.payload.error;
        }
        default: {
            return state;
        }
    }
}


const isFetching = (state=false, action) => {
    switch (action.type) {
        case types.FETCH_QR_DATA_STARTED: {
            return true;
        }
        case types.FETCH_QR_DATA_COMPLETED: 
        case types.FETCH_QR_DATA_FAILED: {
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
    order,
});

export const getQrData = state => state.data;
export const getIsFetchingQr = state => state.isFetching;
export const getQrFetchError = state => state.error;
export const getOrder = state => state.order;
export const getCoordinatesByLevel = (state, level) => state.order.filter(id => 
    state.data[id].level === level)
        .map(filteredId => 
            ({
                x:state.data[filteredId].coordinates[0],
                y:state.data[filteredId].coordinates[1],
                ...state.data[filteredId]
            }));
