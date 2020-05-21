import * as types from '../types/map';

export const startCreatingMap = map => ({ //map es un diccionario con todo lo que se debe agregar para crear un nuevo mapa
  type: types.CREATE_MAP_STARTED,
  payload: map,
});

export const completeCreatingMap = (oldId, map) => ({ //igual este map es un dict y contiene un verdadero mapa (no es fachada)
  type: types.CREATE_MAP_COMPLETED,
  payload: {
    oldId,
    map,
  }
});

export const failCreatingMap = (oldId, error) => ({
  type: types.CREATE_MAP_FAILED,
  payload: {
    oldId,
    error,
  },
});

export const startFetchingMaps = () => ({
  type: types.FETCH_MAP_STARTED,
});

export const completeFetchingMaps = (entities, order) => ({
  type: types.FETCH_MAP_COMPLETED,
  payload: {
    entities,
    order
  }
});

export const failFetchingMaps = error => ({
    type: types.FETCH_MAP_FAILED,
    payload: {
      error,
    }
});

export const startDeletingMap = id => ({
  type: types.DELETE_MAP_STARTED,
  payload: {
    id
  },
});

export const completeDeletingMap = () => ({
  type: types.DELETE_MAP_COMPLETED,

});

export const failDeletingMap = (id, error) => ({
  type: types.DELETE_MAP_FAILED,
  payload: {
    error
  }
});

