import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Provider from './Context/Provider';
import Checkout from './Pages/Checkout';
import ProductProvider from './Context/ProductProvider';
import Login from './Pages/Login';
import Products from './Pages/Products';
import Register from './Pages/Register';

function App() {
  return (
    <Switch>
      <Provider>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/checkout" component={ Checkout } />
        <ProductProvider>
          <Route exact path="/customer/products" component={ Products } />
        </ProductProvider>
        <Route exact path="/">
          <Redirect exact from="/" to="/login" />
        </Route>
      </Provider>
    </Switch>
  );
}

export default App;
