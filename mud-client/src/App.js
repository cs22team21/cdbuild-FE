import React, { useState, useEffect } from "react";
// import "./App.scss";
import { Switch, Route } from 'react-router-dom';
import Login from "./components/Login/Login";
import Game from "./components/Game/Game";


//mud-js
function App() {
  const [logIn, setLogIn] = useState(!!localStorage.getItem("key"));
<<<<<<< HEAD
  const [backendUrl] = useState("https://mud-js.herokuapp.com");
=======
  const [backendUrl] = useState("https://lambda-mud-test.herokuapp.com");
>>>>>>> ec1251f7530b3ba6616f7569f2c3764edcc9cbc4

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
