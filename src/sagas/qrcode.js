import {
call,
takeEvery,
put,
select,
} from 'redux-saga/effects';

import { normalize } from 'normalizr';
import { API_URL } from '../configuration';
import * as actions from '../actions/qrcode';
import * as selectors from '../reducers';
import * as types from '../types/qrcode';
import * as schemas from '../schemas/qrcode';



function* getNodesData(action) {
    try {
    console.log("Esto le mando desde el sagas", `${API_URL}map/${action.payload.id}/markers`)
        
    const token = yield select(selectors.getAuthToken);


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
        const jsonResult = yield response.json();
        const {
            entities: { nodes },
            result,
        } = normalize(jsonResult.result, schemas.nodes);
        yield put(actions.completeFetchingQrData(nodes, result));
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



function* updateNodesData(action) {
    try {
    console.log("llega --------------------");
    const token = yield select(selectors.getAuthToken);

    const response = yield call(
    fetch,  
    `${API_URL}marker/${action.payload.id}`,
    {
        method: 'PUT',
        body: JSON.stringify(action.payload.node),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${token}`,  
        }, 
    },  
    );
    if (response.status === 200) {
        yield put(actions.completeUpdatingQrData());   
    }
    else {
        yield put(actions.failUpdatingQrData("Error server"));
    }
} catch (error) {
    yield put(actions.failUpdatingQrData("Error in fetch")); 
}
}


export function* watchUpdateNodesData() {
yield takeEvery(
    types.UPDATE_NODES_STARTED,
    updateNodesData,
);
}
