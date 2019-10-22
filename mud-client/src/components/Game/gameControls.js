import React, { useState } from "react";
import {
  TiArrowUpThick,
  TiArrowRightThick,
  TiArrowLeftThick,
  TiArrowDownThick
} from "react-icons/ti";

const gameControls = props => {
  return (
    <div className="controls">
      <div>
        <button onClick={() => props.moveDirection("w")}>
          <TiArrowLeftThick size="30" color="green" />{" "}
        </button>
        <button onClick={() => props.moveDirection("n")}>
          <TiArrowUpThick size="30" color="green" />{" "}
        </button>

        <button onClick={() => props.moveDirection("e")}>
          <TiArrowRightThick size="30" color="green" />{" "}
        </button>

        <button onClick={() => props.moveDirection("s")}>
          <TiArrowDownThick size="30" color="green" />{" "}
        </button>
      </div>
    </div>
  );
};

export default gameControls;
