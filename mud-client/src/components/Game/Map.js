import React, { useState, useEffect } from "react";
import axios from "axios";

const Map = props => {
  const [map, setMap] = useState([]);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const auth = `Token ${localStorage.getItem("key")}`;
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: auth
      }
    };
    axios.get(`${props.backendUrl}/api/adv/rooms/`, options).then(res => {
      setRooms(res.data);
    });
  }, [props.logIn, props.backendUrl]);

  let grid = [];

  createMap();
  console.log("grid", grid);

  function createMap() {
    for (let x = 0; x < 5; x++) {
      grid[x] = [];
      for (let y = 0; y < 5; y++) {
        addCell(x, y);
      }
    }
  }

  function addCell(x, y) {
    grid[x][y] = cell(x, y); // create a new object on x and y
  }

  function cell(x, y) {
    return x + 1 + ":" + (y + 1);
  }

  console.log("rooms", rooms);

  return (
    <div>
      <p>{rooms.rooms}</p>
      <p>{grid}</p>
    </div>
  );
};

export default Map;
