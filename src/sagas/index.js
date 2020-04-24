import { fork, all } from 'redux-saga/effects';

function* mainSaga() {
  yield 0/*all([
    fork(),
  ]);*/
}


export default mainSaga;