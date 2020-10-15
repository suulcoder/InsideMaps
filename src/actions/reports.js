import * as types from '../types/reports';

export const startFetchingErrorData = () => ({
    type: types.FETCH_ERROR_DATA_STARTED
});

export const completeFetchingErrorData = (data) => ({
    type: types.FETCH_ERROR_DATA_COMPLETED,
    payload: {
        data,
    }
});

export const failFetchingErrorData = (error) => ({
    type: types.FETCH_ERROR_DATA_FAILED,
    payload: {
        error,
    }
});