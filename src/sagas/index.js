import { fork, all } from 'redux-saga/effects';

import { watchLoginStarted, watchSignUpStarted } from './auth';
import { watchCreateMap } from './map';

function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchSignUpStarted),
    fork(watchCreateMap),
  ]);
}


export default mainSaga;