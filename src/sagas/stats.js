import {
    call,
    takeEvery,
    put,
    select,
    } from 'redux-saga/effects';
    
    import { API_URL } from '../configuration';
    import * as actions from '../actions/stats';
    import * as selectors from '../reducers';
    import * as types from '../types/stats';
    
    
    function* getStats(action) {
        try {
            
        const token = yield select(selectors.getAuthToken);
    
        console.log("Token:", token);
    
        const response = yield call(
        fetch,  
        `${API_URL}logbook/stats/most-visited`,
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
            yield put(actions.completeFetchingStats(result));   
        }
        else {
            yield put(actions.failFetchingStats("Error server"));
        }
    } catch (error) {
        yield put(actions.failFetchingStats("Error in fetch")); 
    }
    }
    
    
    export function* watchGetStats() {
    yield takeEvery(
        types.FETCH_STATS_STARTED,
        getStats,
    );
    }
    