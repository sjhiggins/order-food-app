import React from "react";
import FoodItem from "./FoodItem";
import foodArray from "../content/foodArray";

import "../css/FoodList.css";

const FoodList = () => {
  //-------------------------------------------function to map the individual food items
  const foodMapFunction = (object) => {
    return (
      <FoodItem
        name={object.name}
        description={object.description}
        price={object.price}
        key={object.id}
        id={object.id}
      />
    );
  };

  return (
    <div className="foodlist-container_outer">
      <div className="foodlist-container">{foodArray.map(foodMapFunction)}</div>
    </div>
  );
};

export default FoodList;
