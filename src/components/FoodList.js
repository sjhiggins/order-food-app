import React, { useState, useEffect, useContext } from "react";
import { CheckoutContext } from "./context/CheckoutContext";
import FoodItem from "./FoodItem";
import "../css/FoodList.css";

const FoodList = (props) => {
  const cartCtx = useContext(CheckoutContext);
  const setIsLoading = cartCtx.setIsLoading;
  const isLoading = cartCtx.isLoading;
  const [foodsArray, setFoodsArray] = useState([]);

  //----------------------------------------------fetching food data from firebase
  const fetchFoodHandler = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://httppractise1-default-rtdb.firebaseio.com/foodsArray.json"
    );
    const data = await response.json();
    setFoodsArray(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFoodHandler();
  }, []);

  //-------------------------------------------function to map the individual food items
  const foodMapFunction = (object) => {
    return (
      <FoodItem
        checkoutCart={props.checkoutCart}
        name={object.name}
        description={object.description}
        price={object.price.toFixed(2)}
        key={object.key}
        id={object.id}
      />
    );
  };

  return (
    <div className="foodlist-container_outer">
      {isLoading ? (
        <div className="loading"></div>
      ) : (
        <div className="foodlist-container">
          {foodsArray.map(foodMapFunction)}
        </div>
      )}
    </div>
  );
};

export default FoodList;
