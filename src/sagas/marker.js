import {
    call,
    takeEvery,
    put,
    // race,
    // all,
    delay,
    select,
  } from 'redux-saga/effects';

import * as selectors from '../reducers';
import * as actions from '../actions/marker';
import * as types from '../types/maker';
import { API_URL } from '../configuration';
import { normalize } from 'normalizr';
import * as schemas from '../schemas/marker';
  
  const API_BASE_URL =  API_URL;
  
  
  function* markerFetch(action) {
    try {
        const isAuth = true
        if (isAuth) {
          const token = yield select(selectors.getAuthToken);
          const response = yield call(
            fetch,
            `${API_BASE_URL}marker/`,
            {
              method: 'GET',
              headers:{
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`,
              },
            }
          );
          if (response.status === 200) {
            const jsonResult = yield response.json();
            const normalized = normalize(jsonResult, schemas.markers);
            console.log(normalized)
            yield put(
            actions.completeFetchingMarkers(
                normalized.entities.markers,
                normalized.result
            ),
            );
          } else {
            const { non_field_errors } = yield response.json();
            //yield put(actions.failFetchingMarkers(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failFetchingMarkers('CONNECTION FAILED'));
      }
  }
  
  export function* watchMarkerFetch() {
    yield takeEvery(
      types.MARKERS_FETCHING_STARTED,
      markerFetch,
    );
  }

  function* markerByMapFetch(action) {
    try {
        const isAuth = true
        if (isAuth) {
          const token = yield select(selectors.getAuthToken);
          const map = yield select(selectors.getSelectedMap);

          console.log("Retrieving from ", `${API_BASE_URL}map/${map._id}/markers/`)

          const response = yield call(
            fetch,
            `${API_BASE_URL}map/${map._id}/markers/`,
            {
              method: 'GET',
              headers:{
                'Content-Type': 'application/json',
                'Authorization': `JWT ${token}`,
              },
            }
          );
          if (response.status === 200) {
            const jsonResult = yield response.json();
            //alert("Retrieved: " + jsonResult)
            const normalized = normalize(jsonResult.result, schemas.markers);
            //console.log(normalized)
            yield put(
              actions.completeFetchingMarkers(
                  normalized.entities.markers,
                  normalized.result
              ),
            );
          } else {
            const { non_field_errors } = yield response.json();
            //yield put(actions.failFetchingMarkers(non_field_errors[0]));
          }
        }
      } catch (error) {
        yield put(actions.failFetchingMarkers('CONNECTION FAILED'));
      }
  }
  
  export function* watchMarkerByMapFetch() {
    yield takeEvery(
      types.MAKER_FETCHING_BY_MAP_STARETED,
      markerByMapFetch,
    );
  }


function* addMarker(action) {
    try {
      const isAuth = true
      if (isAuth) {
        const token = yield select(selectors.getAuthToken);
        const response = yield call(
          fetch,
          `${API_BASE_URL}marker/`,
          {
            method: 'POST',
            body: JSON.stringify({...action.payload}),
            headers:{
              'Content-Type': 'application/json',
              'Authorization': `JWT ${token}`,
            },
          }
        );
  
        if (response.status === 201) {
          const marker = yield response.json();
          yield put(
            actions.completeAddingMarker(
              action.payload.id,
              action.payload,
            ),
          );
        } else {
          const { non_field_errors } = yield response.json();
          //yield put(actions.failAddingMarker(non_field_errors[0]));
        }
      }
    } catch (error) {
      //yield put(actions.failAddingMarker('Falló horrible la conexión mano'));
    }
  }

  export function* watchMarkerAddition() {
    yield takeEvery(
      types.MARKER_ADDITION_STARTED,
      addMarker,
    );
  }