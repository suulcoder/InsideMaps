import {
    call,
    takeEvery,
    put,
    select,
    } from 'redux-saga/effects';
    
    import { API_URL } from '../configuration';
    import * as actions from '../actions/reports';
    import * as selectors from '../reducers';
    import * as types from '../types/reports';
    
    
    function* getErrorData(action) {
        try {
        //console.log("Esto le mando desde el sagas", `${API_URL}map/${action.payload.id}/markers`)
            
        const token = yield select(selectors.getAuthToken);
    
        console.log("Token:", token);
    
        const response = yield call(
        fetch,  
        `${API_URL}errorReport`,
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
            yield put(actions.completeFetchingErrorData(result));   
        }
        else {
            yield put(actions.failFetchingErrorData("Error server"));
        }
    } catch (error) {
        yield put(actions.failFetchingErrorData("Error in fetch")); 
    }
    }
    
    
    export function* watchGetErrorData() {
    yield takeEvery(
        types.FETCH_ERROR_DATA_STARTED,
        getErrorData,
    );
    }
    