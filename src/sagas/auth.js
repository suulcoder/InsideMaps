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


const API_BASE_URL = 'https://inside-maps-api.herokuapp.com/api/v1/auth';


function* login(action) {

  try {
    console.log("esto le mandamos", action.payload)
    const response = yield call(
      fetch,  
      `${API_BASE_URL}/signin/`,
      {
        method: 'POST',
        body: JSON.stringify(action.payload),
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
    yield put(actions.failLogin('CONNECTION FAILED',0));
  }
}


export function* watchLoginStarted() {
  yield takeEvery(
    types.AUTHENTICATION_STARTED,
    login,
  );
}


function* signin(action) {
  try {
    const response = yield call(
      axios,
      `${API_BASE_URL}/signup/`,
      {
        method: 'POST',
        body: JSON.stringify(action.payload),
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
      yield put(actions.failLogin(message,1));                 //1 becuase is in sign up
    }
    
  } catch (error) {
    yield put(actions.failLogin('CONNECTION FAILED',1));
  }
  
}