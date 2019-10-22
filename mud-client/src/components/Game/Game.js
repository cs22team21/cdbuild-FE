import React, { useState, useEffect } from "react";
import axios from "axios";

import Controls from './gameControls';

const Game = props => {
  const [user, setUser] = useState();

  useEffect(() => {
    const auth = `Token ${localStorage.getItem("key")}`;
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: auth
      }
    };
    console.log(options);
    axios.get(`${props.backendUrl}/api/adv/init/`, options).then(res => {
      setUser(res.data);
      console.log('resData', res.data)
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
      });
  }

  console.log('user', user);
  const mapInfo = user ? user.room_id : 0;
  return (
    <React.Fragment>
      <div className="left">
        <h2>Hello World</h2>
      </div>
      <div className="right">
        {/* <Info user={user} /> */}
        <Controls moveDirection={moveDirection} />
      </div>
    </React.Fragment>
  );
};

export default Game;
