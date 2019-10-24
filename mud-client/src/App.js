import React, { useState, useEffect } from "react";
// import "./App.scss";
import { Switch, Route } from 'react-router-dom';
import Login from "./components/Login/Login";
import Game from "./components/Game/Game";


//mud-js
function App() {
  const [logIn, setLogIn] = useState(!!localStorage.getItem("key"));
  const [backendUrl] = useState("https://mud-js.herokuapp.com");

  useEffect(() => {
    if (localStorage.getItem("key")) {
      setLogIn(true);
    } else {
      setLogIn(false);
    }
  }, []);
  function setLocalKey() {
    if (localStorage.getItem("key")) {
      setLogIn(true);
    } else {
      setLogIn(false);
    }
  }
  return (
    <div className="App">
      <h2>SciFi Time</h2>
      <div className="container">
        <Switch>
          <Route path='/login'
            render={props => <Login {...props} backendUrl={backendUrl} logIn={logIn} setLocalKey={setLocalKey} />}
          />
          <Route path='/game'
            render={props => <Game {...props} backendUrl={backendUrl} login={logIn} />}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
