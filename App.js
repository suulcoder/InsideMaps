import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from './src/localStorage';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom' 
import { Platform } from 'react-native';
import AppState from './src/components/AppState'

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const { store, persistor } = configureStore();

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router>
        <Route path="/" component={AppState}/>
      </Router>
    </PersistGate>
  </Provider>
);


ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

export default App;