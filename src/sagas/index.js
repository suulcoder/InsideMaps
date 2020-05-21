import { fork, all } from 'redux-saga/effects';

import { watchLoginStarted, watchSignUpStarted } from './auth';
import { watchCreateMap, watchFetchMaps } from './map';

function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchSignUpStarted),
    fork(watchCreateMap),
    fork(watchFetchMaps),
  ]);
}


export default mainSaga;