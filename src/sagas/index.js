import { fork, all } from 'redux-saga/effects';

import { watchLoginStarted, watchSignUpStarted } from './auth';

function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchSignUpStarted)
  ]);
}


export default mainSaga;