import { fork, all } from 'redux-saga/effects';

import { watchLoginStarted, watchSignUpStarted } from './auth';
import { watchCreateMap, watchFetchMaps, watchDeleteMap, watchUpdateMap} from './map';
import { watchMarkerAddition, watchMarkerFetch, watchMarkerByMapFetch} from './marker';
import { watchUploadFile } from './places';
import { watchGetNodesData } from './qrcode';

function* mainSaga() {
  yield all([
    fork(watchLoginStarted),
    fork(watchSignUpStarted),
    fork(watchCreateMap),
    fork(watchFetchMaps),
    fork(watchDeleteMap),
    fork(watchUpdateMap),
    fork(watchMarkerAddition),
    fork(watchMarkerFetch),
    fork(watchMarkerByMapFetch),
    fork(watchUploadFile),
    fork(watchGetNodesData),
  ]);
}


export default mainSaga;