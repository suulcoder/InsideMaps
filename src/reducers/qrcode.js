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
            return [...state, ...action.payload.order];
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
        
        case types.FETCH_QR_DATA_COMPLETED: {
            return false;
        }

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
export const getCoordinatesByLevel = (state, level) => state.order.map((id, i) => { if(state.data[i].level == level)  {return  {x:state.data[i].coordinates[0], y: state.data[i].coordinates[1]}} else { return {}}});
export const getCoordinates = state => state.order.map(id => ({x:state.data[id].coordinates[0], y: state.data[id].coordinates[1]}));
export const getOrder = state => state.order;


