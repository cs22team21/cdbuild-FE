import React, { useState, useEffect } from "react";
import axios from "axios";
import Shape from './Shape'

const Map = props => {
  const [grid, setGrid] = useState();
  const [rooms, setRooms] = useState();

  useEffect(() => {
    const auth = `Token ${localStorage.getItem("key")}`;
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: auth
      }
    };
    axios.get(`${props.backendUrl}/api/adv/grid/`, options).then(res => {
      setGrid(res.data.grid)
    });
    axios.get(`${props.backendUrl}/api/adv/get_rooms/`, options).then(res => {
      setRooms(res.data.rooms)
    })
  }, [])

  if (!grid || !props.user) return <div>Loading</div>


  return <Shape user={props.user} grid={grid} rooms={rooms} />
}

export default Map;
