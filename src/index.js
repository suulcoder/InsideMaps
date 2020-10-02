import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Home from './components/Home';
import Auth from './components/Auth';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { configureStore } from './store'
import CreateMapForm from './components/CreateMapForm';
import UpdateMapForm from './components/UpdateMapForm';
import CreatePlace from './components/CreatePlace';
import QRGenerator from './components/QRGenerator';
import Stats from './components/Stats';

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
            <Route exact path="/map/:id/update/" component={UpdateMapForm} />
            <Route exact path="/map/createplace" component={CreatePlace} />
            <Route exact path="/map/:id/qrgen" component={QRGenerator} />
            <Route exact path="/stats" component={Stats}/>
            <Route render={() => <Redirect to="/" />} />
          </Switch>
        </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

