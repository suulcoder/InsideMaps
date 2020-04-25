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
import * as actions from '../actions/auth';
import * as types from '../types/auth';
import axios from 'axios';


const API_BASE_URL = 'http://localhost:4000/api/v1/auth/';


function* login(action) {

  try {

    const response = yield call(
      axios,
      `${API_BASE_URL}/signin/`,
      {
        method: 'POST',
        body: JSON.stringify(action.payload),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (response.status === 200) {
      const { token } = yield response.json();
      yield put(actions.completeLogin(token));
    } else {
      const { message } = yield response.json();
      yield put(actions.failLogin(message));
    }

  } catch (error) {
    yield put(actions.failLogin('Falló la conexión'));
  }
}


export function* watchLoginStarted() {
  yield takeEvery(
    types.AUTHENTICATION_STARTED,
    login,
  );
}

function* signin(action) {

}
