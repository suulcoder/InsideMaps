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
