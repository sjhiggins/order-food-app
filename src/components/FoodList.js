import React, { useState, useEffect, useContext } from "react";
import { CheckoutContext } from "./context/CheckoutContext";
import FoodItem from "./FoodItem";
import "../css/FoodList.css";

const FoodList = (props) => {
  const cartCtx = useContext(CheckoutContext);
  const meatClicked = cartCtx.meatClicked;
  const vegClicked = cartCtx.vegClicked;
  const setIsLoading = cartCtx.setIsLoading;
  const isLoading = cartCtx.isLoading;
  const [originalFoodsArray, setOriginalFoodsArray] = useState([]);

  //----------------------------------------------fetching food data from firebase
  const fetchFoodHandler = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://httppractise1-default-rtdb.firebaseio.com/foodsArray.json"
    );
    const data = await response.json();
    setOriginalFoodsArray(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchFoodHandler();
  }, []);

  console.log(originalFoodsArray);

  //-------------------should also add a function that finds the index of meat/veg meals for dynamic slicing incase of changing menu

  // -------------------------------------------------------filter by veg or meat

  let filteredArray = originalFoodsArray;

  if (meatClicked && vegClicked) {
    filteredArray = originalFoodsArray;
  } else if (meatClicked && !vegClicked) {
    filteredArray = originalFoodsArray.slice(0, 5);
  } else if (!meatClicked && vegClicked) {
    filteredArray = originalFoodsArray.slice(5, 9);
  }

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

  let vegOrMeatSign = <div></div>;

  if (meatClicked && !vegClicked) {
    vegOrMeatSign = <div className="foodlist-sign-meat">Just Meat</div>;
  } else if (!meatClicked && vegClicked) {
    vegOrMeatSign = <div className="foodlist-sign-veg">Just Veg</div>;
  } else if (meatClicked && vegClicked) {
    vegOrMeatSign = <div></div>;
  }

  return (
    <div className="foodlist-container_outer">
      {isLoading ? (
        <div className="loading"></div>
      ) : (
        <div className="foodlist">
          {vegOrMeatSign}
          <div className="foodlist-container">
            {filteredArray.map(foodMapFunction)}
          </div>
        </div>
      )}
    </div>
  );
};

export default FoodList;
