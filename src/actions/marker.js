import * as types from '../types/maker'

export const startFetchingMarkers = () => ({
    type: types.MARKERS_FETCHING_STARTED,
  });

export const completeFetchingMarkers = (entities, order) => ({
    type: types.MARKERS_FETCHING_COMPLETED,
    payload: {
        entities,
        order,
    },
    });

export const failFetchingMarkers = error => ({
    type: types.MARKER_ADDITION_FAILED,
    payload: {
        error,
    },
});

export const startFetchingMarkersbyMap = () => ({
    type: types.MAKER_FETCHING_BY_MAP_STARETED,
  });

export const completeFetchingMarkersByMap = (entities, order) => ({
    type: types.MARKERS_FETCHING_BY_MAP_COMPLETED,
    payload: {
        entities,
        order,
    },
    });

export const failFetchingMarkersByMap = error => ({
    type: types.MARKERS_FETCHING_BY_MAP_FAILED,
    payload: {
        error,
    },
});

export const startAddingMarker = (Marker) => ({
    type: types.MARKER_ADDITION_STARTED,
    payload: Marker,
});

export const completeAddingMarker = (oldId, marker) => ({
    type: types.MARKER_ADDITION_COMPLETED,
    payload: {
        oldId,
        marker,
    },
});
export const failAddingMarker = (oldId, error) => ({
    type: types.MARKER_ADDITION_FAILED,
    payload: {
        oldId,
        error,
    },
})