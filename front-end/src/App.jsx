import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Provider from './Context/Provider';
import Login from './Pages/Login';

function App() {
  return (
    <Switch>
      <Provider>
        <Route exact path="/login" component={ Login } />
        <Redirect exact from="/" to="/login" />
      </Provider>
    </Switch>
  );
}

export default App;
