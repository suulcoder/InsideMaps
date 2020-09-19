import * as types from '../types/qrcode';

export const startFetchingQrData = (id) => ({
    type: types.FETCH_QR_DATA_STARTED,
    payload: {
        id
    }
});

export const completeFetchingQrData = (data) => ({
    type: types.FETCH_QR_DATA_COMPLETED,
    payload: {
        data,
    }
});

export const failFetchingQrData = (error) => ({
    type: types.FETCH_QR_DATA_FAILED,
    payload: {
        error
    }
});
