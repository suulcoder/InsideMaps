import {
call,
takeEvery,
put,
// race,
// all,
delay,
select,
} from 'redux-saga/effects';

import * as actions from '../actions/places';
import * as types from '../types/places';
import axios from 'axios';  
import { API_URL } from '../configuration';


function* uploadFile(action) {

try {
    let formData = FormData();
    formData.append("file", action.payload.file);
    const response = yield call(
    fetch,  
    `${API_BASE_URL}/createPlaces/`,
    {
        method: 'POST',
        body: formData,
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        },
    },
    );
    if (response.status === 200) {
    const response = yield response.json();
    console.log(response);
    yield put(actions.completeUploadingFile());
    } else {
    const { message } = yield response.json();
    yield put(actions.failedUploadingFile(message));   
    }
} catch (error) {
    yield put(actions.failedUploadingFile('CONNECTION FAILED')); 
}
}


export function* watchUploadFile() {
yield takeEvery(
    types.UPLOAD_PLACES_STARTED,
    uploadFile,
);
}
