import React, { useState, useEffect } from "react";
import axios from "axios";

import Controls from "./gameControls";
import Map from "./Map";
import "./Game.scss";
// import Player from './Player';

const Game = props => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const auth = `Token ${localStorage.getItem("key")}`;
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: auth
      }
    };
    console.log(options);
    axios.get(`${props.backendUrl}/api/adv/position/`, options).then(res => {
      setUser(res.data);
      console.log("resData", res.data);
    });
  }, [props.logIn, props.backendUrl]);

  function moveDirection(direction) {
    const auth = `Token ${localStorage.getItem("key")}`;
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: auth
      }
    };
    console.log(direction);
    axios
      .post(`${props.backendUrl}/api/adv/move/`, { direction }, options)
      .then(res => {
        setUser(res.data);
        console.log(res.data);
      });
  }

  console.log("user", user);

  return (
    <React.Fragment>
      <div className="game-wrapper">
        <div className="game-map">
          <Map logIn={props.logIn} backendUrl={props.backendUrl} user={user} />
        </div>
        <div className="game-player">
          <div>
            <h3>User: {user.name}</h3>
            <h4>
              Current Room:{" "}
              {user.error_msg === ""
                ? user.title
                : `${user.error_msg} you are still in the ${user.title}`}
            </h4>
          </div>
          <Controls moveDirection={moveDirection} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Game;
