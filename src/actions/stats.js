import * as types from '../types/stats';

export const startFetchingStats = () => ({
    type: types.FETCH_STATS_STARTED
});

export const completeFetchingStats = (data) => ({
    type: types.FETCH_STATS_COMPLETED,
    payload: {
        data,
    }
});

export const failFetchingStats = (error) => ({
    type: types.FETCH_STATS_FAILED,
    payload: {
        error,
    }
});