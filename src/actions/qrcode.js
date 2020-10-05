import * as types from '../types/qrcode';

export const startFetchingQrData = (id) => ({
    type: types.FETCH_QR_DATA_STARTED,
    payload: {
        id
    }
});

export const completeFetchingQrData = (data, order) => ({
    type: types.FETCH_QR_DATA_COMPLETED,
    payload: {
        data,
        order,
    }
});

export const failFetchingQrData = (error) => ({
    type: types.FETCH_QR_DATA_FAILED,
    payload: {
        error
    }
});


export const startUpdatingQrData = (id, node) => ({
    type: types.UPDATE_NODES_STARTED,
    payload: {
        id,
        node,
    }
});

export const completeUpdatingQrData = () => ({
    type: types.UPDATE_NODES_COMPLETED,

});

export const failUpdatingQrData = (error) => ({
    type: types.UPDATE_NODES_STARTED,
    payload: {
        error
    }
});

