import {
  call,
  takeEvery,
  put,
  select,
} from 'redux-saga/effects';

import * as actions from '../actions/map';
import * as types from '../types/map';
import * as selectors from '../reducers';

const API_BASE_URL = 'https://inside-maps-api.herokuapp.com/api/v1/map';


function* createMap(action) {
  const map  = action.payload;
  const oldId = map._id;
  console.log("llega el old id", oldId)
  try {
    //const isAuth = yield select(selectors.isAuthenticated)

    if(true){

      const token = yield select(selectors.getAuthToken);

      const response = yield call(
        fetch,
        API_BASE_URL,
        {
          method: 'POST',
          body: action.payload,
          headers: {
            'Content-Type': 'application/json',
            //'Authorization': `JWT ${token}`,
            'Access-Control-Allow-Origin': 'origin-list',
          },
        }
      );

      if(response.status >= 200 && response.status <= 300){
        const { result } = yield response.json();
        const map = result;
        yield put(actions.completeCreatingMap(oldId, map));
        console.log("Se creo un nuevo mapa exitosamente!", map); 
      } else {
        console.log("Error en la respuesta!");
        console.log("llega el estatus", response)
      }

    } else {
      console.log('Error de autenticación');

    }

  } catch(error) {
    console.log(error);
    yield put(actions.failCreatingMap(oldId, error));
  }
}

export function* watchCreateMap() {
  yield takeEvery(
    types.CREATE_MAP_STARTED,
    createMap,
  );
}