import React from "react";
import FrontCard from "./FrontCard";
import "./BackCard.css";

function BackCard(props) {
  let cvc = '000';
  if(props?.cvc?.length > 0) {
    cvc = props.cvc;
  }
  return (
    <div className="background-card">
      <div className="background-card__cvc">{cvc}</div>
      <FrontCard
        name={props.name}
        number={props.number}
        month={props.month}
        year={props.year}
      />
    </div>
  );
}

export default BackCard;
