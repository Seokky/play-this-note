import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';

import 'assets/styles/reset.css';
import 'assets/styles/fontface.css';
import 'assets/styles/root.css';

import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import AppHeader from 'modules/common/components/AppHeader/AppHeader';
import Home from 'pages/Home/Home';
import Trainer from 'pages/Trainer/Trainer';
import SetCreator from 'pages/SetCreator/SetCreator';
import { ROUTES } from '../../constants/routes';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <AppHeader />

          <Switch>
            <Route path={ROUTES.TRAINER}>
              <Trainer />
            </Route>
            <Route path={ROUTES.CREATE_OWN_SET}>
              <SetCreator />
            </Route>
            <Route path={ROUTES.HOME}>
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
