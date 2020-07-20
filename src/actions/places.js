import * as types from '../types/places';


export const startUploadingFile = file => ({
    type: types.UPLOAD_PLACES_STARTED,
    payload: {
        file,
    }
});


export const completeUploadingFile = () => ({
    type: types.UPLOAD_PLACES_COMPLETED,
});


export const failedUploadingFile = () => ({
    type: types.UPLOAD_PLACES_FAILED,
});
