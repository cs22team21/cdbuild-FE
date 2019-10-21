import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import PrivateRoute from './helper/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Register} />
        <PrivateRoute path='/' component={Game} />
      </Switch>
    </div>
  );
}

export default App;
