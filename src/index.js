import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './components/Home';
import Auth from './components/Auth';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { configureStore } from './store'
import CreateMapForm from './components/CreateMapForm';

import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

const { store, persistor } = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Auth}/>
            <Route exact path="/map/create/" component={CreateMapForm}/>
          </Switch>
        </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

