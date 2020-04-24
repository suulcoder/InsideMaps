import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import { Platform } from 'react-native';
import AppState from './src/components/AppState'
import { createStore, applyMiddleware } from 'redux';
import reducer from './src/reducers';
import { loadState, saveState } from './src/localStorage'
import throttle from 'lodash/throttle'
import createSagaMiddleware from 'redux-saga';
import mainSaga from './src/sagas';

//localStorage.clear();
const persistedState = loadState()
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer,persistedState,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mainSaga);
store.subscribe(throttle(()=>{
  saveState(store.getState());
}),1000)

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const App = () => (
  <Provider store={store}>
    <AppState></AppState>
  </Provider>
);


export default App;