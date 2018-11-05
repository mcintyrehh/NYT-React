import React from "react";
import "./CardBtn.css";

const CardBtn = props => (
  <button
    // onClick={props.onClick}
    className="card-btn"
    {...props}
  ></button>
);

export default CardBtn;
