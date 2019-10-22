import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import PrivateRoute from './helper/PrivateRoute';
import Game from './components/Game/Game';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <PrivateRoute path='/' component={Game} />
      </Switch>
    </div>
  );
}

export default App;
