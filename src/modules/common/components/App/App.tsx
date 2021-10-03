import React from 'react';
import { Provider } from 'react-redux';
import store from 'store';

import 'assets/styles/reset.css';
import 'assets/styles/fontface.css';
import 'assets/styles/root.css';

import 'modules/common/components/App/App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import AppHeader from 'modules/common/components/AppHeader/AppHeader';
import Home from 'pages/Home/Home';
import Trainer from 'pages/Trainer/Trainer';
import CreateSetOfNotes from 'pages/CreateSetOfNotes';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <AppHeader />

          <Switch>
            <Route path="/trainer">
              <Trainer />
            </Route>
            <Route path="/create-own-set">
              <CreateSetOfNotes />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
