import {
  call,
  takeEvery,
  put,
  select,
} from 'redux-saga/effects';
import { normalize } from 'normalizr';

import * as actions from '../actions/map';
import * as types from '../types/map';
import * as selectors from '../reducers';
import * as schemas from '../schemas/map';
import { bodyParser } from '../modules/parser';


const API_BASE_URL = 'https://inside-maps-api.herokuapp.com/api/v1/map/';


function* createMap(action) {
  const map  = action.payload;
  const oldId = map._id;
  console.log("Esto le mando desde el saga", action.payload)
  try {
    //const isAuth = yield select(selectors.isAuthenticated)

    if(true){

      const token = yield select(selectors.getAuthToken);

      const response = yield call(
        fetch,
        API_BASE_URL,
        {
          method: 'POST',
          body: JSON.stringify(action.payload),
          headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `JWT ${token}`,
          },
        }
      );

      if(response.status >= 200 && response.status <= 300){
        const { result } = yield response.json();
        const map = result;
        yield put(actions.completeCreatingMap(oldId, map));
        window.location.href = URL
        console.log("Se creo un nuevo mapa exitosamente!", map); 
        alert("Se creo un nuevo mapa exitosamente")
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

function* fetchMaps(action){ 

  try {
    //const isAuth = yield select(selectors.isAuthenticated)

    if(true){

      const token = yield select(selectors.getAuthToken);

      const response = yield call(
        fetch,
        API_BASE_URL,
        {
          method: 'GET',
          headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `JWT ${token}`,
          },
        }
      );

      if(response.status >= 200 && response.status <= 300){

        const jsonResult = yield response.json();
        const {
          entities: { maps },
          result,
        } = normalize(jsonResult, schemas.maps)
        yield put(actions.completeFetchingMaps(maps, result))
        
      } else {
        console.log("Error en la respuesta!");
        console.log("llega el estatus", response)
      }

    } else {
      console.log('Error de autenticación');

    }

  } catch(error) {
    console.log("Este es el error!!!!",error);
    yield put(actions.failFetchingMaps(error));
  }

}

export function* watchFetchMaps() {
  yield takeEvery(
    types.FETCH_MAP_STARTED,
    fetchMaps,
  );
}

export function* deleteMap(action) {


  try {
    //const isAuth = yield select(selectors.isAuthenticated)

    if(true){

      const token = yield select(selectors.getAuthToken);

      const response = yield call(
        fetch,
        `${API_BASE_URL}${action.payload.id}`,
        {
          method: 'DELETE',
          headers: {
            //'Content-Type': 'application/x-www-form-urlencoded',
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `JWT ${token}`,
          },
        }
      );

      if(response.status >= 200 && response.status <= 300){

        const { msg } = yield response.json();
       
        yield put(actions.completeDeletingMap())
        console.log("Se elimino existosamente ", msg);
        alert("Se elimino exitosamente el mapa");
      } else {
        alert("Falló la eliminacion del mapa, intente de nuevo");
        console.log("Error en la respuesta!");
        console.log("llega el estatus", response)
      }

    } else {
      console.log('Error de autenticación');

    }

  } catch(error) {
    console.log("Este es el error!!!!",error);
    yield put(actions.failFetchingMaps(error));
  }

}

export function* watchDeleteMap() {
  yield takeEvery(
    types.DELETE_MAP_STARTED,
    deleteMap,
  );
}

export function* updateMap(action) {

  const id = action.payload.id;

  try {
    //const isAuth = yield select(selectors.isAuthenticated)

    if(true){

      const token = yield select(selectors.getAuthToken);

      const response = yield call(
        fetch,
        `${API_BASE_URL}${id}`,
        {
          method: 'PUT',
          body: JSON.stringify(action.payload.map),
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `JWT ${token}`,
          },
        }
      );

      if(response.status >= 200 && response.status <= 300){       
        yield put(actions.completeUpdatingMap(id))
        console.log("Se actualizó existosamente ", id);
        alert("Se elimino actualizo el mapa");
      } else {
        alert("Falló la eliminacion del mapa, intente de nuevo");
        console.log("Error en la respuesta!");
        console.log("llega el estatus", response)
      }

    } else {
      console.log('Error de autenticación');

    }

  } catch(error) {
    console.log("Este es el error!!!!",error);
    yield put(actions.failFetchingMaps(error));
  }

}


export function* watchUpdateMap() {
  yield takeEvery(
    types.UPDATE_MAP_STARTED,
    updateMap,
  );
}
 