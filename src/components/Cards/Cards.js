import React from "react";
import "./style.css";

const Cards = props => (
  <div className="card" onClick={() => props.clickCount(props.id)}>
    <div className="imgContainer">
      <img className="cardImage" alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Cards;
