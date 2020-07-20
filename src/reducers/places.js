import { combineReducers } from 'redux';

import * as types from '../types/places';

const uploaded = (state=null, action) => {

    switch(action.type) {   
        case types.UPLOAD_PLACES_STARTED : {
            return false;
        }
        case types.UPLOAD_PLACES_COMPLETED : {
            return true;
        }
        default : {
            return state;
        }
    }
}


const isUploading = (state=false, action) => {
    switch(action.type) {
        case types.UPLOAD_PLACES_STARTED : {
            return true;
        }
        case types.UPLOAD_PLACES_COMPLETED : {
            return false;
        }
        case types.UPLOAD_PLACES_FAILED : {
            return false;
        }
        default : {
            return state;
        }
    }
}

const uploadError = (state=null, action) => {
    switch(action.type) {
        case types.UPLOAD_PLACES_FAILED : {
            return action.payload.error;
        }
        case types.UPLOAD_PLACES_STARTED : {
            return null;
        }
        case types.UPLOAD_PLACES_COMPLETED : {
            return null;
        }
        default : {
            return state;
        }
    }
}

export default combineReducers({
    uploaded,
    isUploading,
    uploadError,
});

export const getIsUploading = state => state.isUploading;
export const getUploadError = state => state.uploadError;
export const getIsUploaded = state => state.uploaded;