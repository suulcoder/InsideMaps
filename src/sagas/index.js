import { fork, all } from 'redux-saga/effects';

import { watchLoginStarted, watchSignUpStarted } from './auth';
import { watchCreateMap, watchFetchMaps, watchDeleteMap, watchUpdateMap} from './map';

function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchSignUpStarted),
    fork(watchCreateMap),
    fork(watchFetchMaps),
    fork(watchDeleteMap),
    fork(watchUpdateMap),
  ]);
}


export default mainSaga;