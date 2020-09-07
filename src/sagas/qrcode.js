import {
call,
takeEvery,
put,
// race,
// all,
delay,
select,
} from 'redux-saga/effects';

import { normalize } from 'normalizr';

import { API_URL } from '../configuration';
import * as actions from '../actions/qrcode';
import * as selectors from '../reducers';
import * as types from '../types/qrcode';


function* getNodesData(action) {
    try {
    console.log("Esto le mando desde el sagas", `${API_URL}map/${action.payload.id}/markers`)
        
    const token = yield select(selectors.getAuthToken);

    console.log("Token:", token);

    const response = yield call(
    fetch,  
    `${API_URL}map/${action.payload.id}/markers`,
    {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${token}`,  
        }, 
    },  
    );
    if (response.status === 200) {
        const { result } = yield response.json();
        yield console.log("Respuesta ---->" , result)
        yield put(actions.completeFetchingQrData(result));   
    }
    else {
        yield put(actions.failFetchingQrData("Error server"));
    }
} catch (error) {
    yield put(actions.failFetchingQrData("Error in fetch")); 
}
}


export function* watchGetNodesData() {
yield takeEvery(
    types.FETCH_QR_DATA_STARTED,
    getNodesData,
);
}
