import {
  call,
  takeEvery,
  put,
  select,
} from 'redux-saga/effects';

import * as actions from '../actions/map';
import * as types from '../types/map';
import * as selectors from '../reducers';

const API_BASE_URL = 'https://inside-maps-api.herokuapp.com/api/v1/auth';


function* createMap(action) {
  const { map } = action.payload;
  const oldId = map.id;
  try {
    const isAuth = yield select(selectors.isAuthenticated)

    if(isAuth){

      const token = yield select(selectors.getAuthToken);

      const response = yield call(
        fetch,
        API_BASE_URL,
        {
          method: 'POST',
          body: action.payload,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `JWT ${token}`,
          },
        }
      );

      if(response.status === 200){
        const { newMap } = yield response.json();
        yield put(actions.completeCreatingMap(oldId, newMap));
        console.log("Se creo un nuevo mapa exitosamente!", newMap); 
      } else {
        console.log("Error en la respuesta!");
      }

    } else {
      console.log('Error de autenticación');
    }

  } catch(error) {
    console.log(error);
    yield put(actions.failCreatingMap(error));
  }
}

export function* watchCreateMap() {
  yield takeEvery(
    types.CREATE_MAP_STARTED,
    createMap,
  );
}