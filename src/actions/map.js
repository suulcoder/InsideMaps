import * as types from '../types/map';
import { ShadowPropTypesIOS } from 'react-native';

export const startCreatingMap = map => ({ //map es un diccionario con todo lo que se debe agregar para crear un nuevo mapa
  type: types.CREATE_MAP_STARTED,
  payload: map,
});

export const completeCreatingMap = (oldId, map) => ({ //igual este map es un dict y contiene un verdadero mapa (no es fachada)
  type: types.CREATE_MAP_COMPLETED,
  payload: {
    oldId,
    map,
  },
});

export const failCreatingMap = (oldId, error) => ({
  type: types.CREATE_MAP_FAILED,
  payload: {
    oldId,
    error,
  },
});

export const startFetchingMap = () => ({
  type: types.FETCH_MAP_STARTED,
});

export const failFetchingMap = error => ({
  type: types.FETCH_MAP_FAILED,
  payload: {
    error,
  },
});


export const completeFetchingMap = (entities, order) => ({
  type: types.FETCH_MAP_COMPLETED,
  payload: {
    entities,
    order
  },
});

export const startRemovingMap = id => ({
  type: types.REMOVE_MAP_STARTED,
  payload: {
    id
  },
});

export const completeRemovingMap = () => ({
  type: types.REMOVE_MAP_COMPLETED,
});

export const failRemovingMap = (id, error) => ({
  type: types.REMOVE_MAP_FAILED,
  payload: {
    id,
    error,
  },
});

