import {
call,
takeEvery,
put,
select,
} from 'redux-saga/effects';

import * as actions from '../actions/places';
import * as selectors from '../reducers';
import * as types from '../types/places';
import { API_URL } from '../configuration';


const API_BASE_URL = `${API_URL}map`;


function* uploadFile(action) {
try {

    const token = yield select(selectors.getAuthToken);

    const response = yield call(
    fetch,  
    API_BASE_URL,
    {
        method: 'POST',
        body: action.payload.file,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${token}`,          
        }, 
    },  
    );
    if (response.satus >300) {
        //const { message } = yield response.json();
        console.log("Respuesta ---->" , response)
        yield put(actions.failedUploadingFile("Trono grueso"));   
    }
    else {
        yield put(actions.completeUploadingFile());
    }
} catch (error) {
    yield put(actions.failedUploadingFile(error)); 
}
}


export function* watchUploadFile() {
yield takeEvery(
    types.UPLOAD_PLACES_STARTED,
    uploadFile,
);
}
