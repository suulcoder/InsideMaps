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
import { toast } from 'react-toastify';


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
        yield put(actions.failedUploadingFile("Error en la respuesta"));   
        toast.error("Error while creating map, try again", { position: toast.POSITION.BOTTOM_RIGHT });
    }
    else {
        yield put(actions.completeUploadingFile());
        toast.success("New map created successfully!", { position: toast.POSITION.BOTTOM_RIGHT });
    }
} catch (error) {
    yield put(actions.failedUploadingFile(error)); 
    toast.error("Error while creating map, try again", { position: toast.POSITION.BOTTOM_RIGHT });

}
}


export function* watchUploadFile() {
yield takeEvery(
    types.UPLOAD_PLACES_STARTED,
    uploadFile,
);
}
