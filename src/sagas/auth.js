import {
  call,
  takeEvery,
  put,
  // race,
  // all,
  delay,
  select,
} from 'redux-saga/effects';

import * as actions from '../actions/auth';
import * as types from '../types/auth';
import axios from 'axios';
import { bodyParser } from '../modules/parser';


const API_BASE_URL = 'https://inside-maps-api.herokuapp.com/api/v1/auth';


function* login(action) {

  try {
    const response = yield call(
      fetch,  
      `${API_BASE_URL}/signin/`,
      {
        method: 'POST',
        body: bodyParser(action.payload),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    if (response.status === 200) {
      const { token } = yield response.json();
      yield put(actions.completeLogin(token));
    } else {
      const { message } = yield response.json();
      yield put(actions.failLogin(message,0));   //0 because is in login form
    }

  } catch (error) {
    console.log(error)
    yield put(actions.failLogin('CONNECTION FAILED',0));   //0 because is in login form
  }
}


export function* watchLoginStarted() {
  yield takeEvery(
    types.AUTHENTICATION_STARTED,
    login,
  );
}


function* signup(action) {
  try {
    const response = yield call(
      fetch,  
      `${API_BASE_URL}/signup/`,
      {
        method: 'POST',
        body: bodyParser(action.payload),
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    );

    if (response.status > 200 && response.status < 300) {
        yield put(actions.failLogin('¡User created, please login!',1));
    } else {
      const { message } = yield response.json();
      yield put(actions.failLogin(message,1));   //1 because is in signup form
    }

  } catch (error) {
    yield put(actions.failLogin('CONNECTION FAILED',1));   //1 because is in signup form
  }
  
}

export function* watchSignUpStarted() {
  yield takeEvery(
    types.REGISTRATION_STARTED,
    signup,
  );
}