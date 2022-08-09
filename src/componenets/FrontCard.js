import React from "react";
import "./FrontCard.css";
import { ReactComponent as YourSvg } from "../images/card-logo.svg";

const FrontCard = (props) => {
  function monthYearDisplay(expDate) {
    return String(expDate).padStart(2, "0");
  }

  let cardNumber = "0000 0000 0000 0000";
  if (props.number.length > 0) {
      cardNumber = `${props.number.slice(0, 4)} ${props.number.slice(4, 8)} ${props.number.slice(8, 12)} ${props.number.slice(12, 16)}`;
    };
  let cardName = "JANE APPLESEED";
  if(props?.name?.length > 0) {
    cardName = props.name;
  }

  

  return (
    <div className="display-card">
      <YourSvg className="svg" />
      <div className="display-card__number">
        {cardNumber}
      </div>
      <div className="display-card__info">
        {cardName}
        <div>
          {monthYearDisplay(props.month)}/{monthYearDisplay(props.year)}
        </div>
      </div>
    </div>
  );
};

export default FrontCard;
