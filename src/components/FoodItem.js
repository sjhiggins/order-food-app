import React from "react";
import FoodItemCounter from "./FoodItemCounter";
import "../css/FoodItem.css";

const FoodItem = (props) => {
  // --------------------------------- Logic for cart metrics is in FoodItemCounter component
  return (
    <div className="fi-container">
      <div className="fi-subcontainer">
        <div className="fi-food">
          <div className="fi-content food">{props.name}</div>
          <div className="fi-content description">
            <p>{props.description}</p>
          </div>
          <div className="fi-content price">£{props.price}</div>
        </div>
        <div className="fi-counter">
          <FoodItemCounter
            name={props.name}
            id={props.id}
            price={props.price}
          />
        </div>
      </div>
      <div className="UNDERLINE-DIV"></div>
    </div>
  );
};

export default FoodItem;
