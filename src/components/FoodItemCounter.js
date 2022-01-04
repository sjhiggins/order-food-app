import React, { useState, useContext, useEffect } from "react";
import "../css/FoodItemCounter.css";
import { CheckoutContext } from "./context/CheckoutContext";

const FoodItemCounter = (props) => {
  // checkoutCart is array containing all food objects with their amounts // all logic carried out when amountOfItem changes

  const [checkoutCart, setCheckoutCart] = useContext(CheckoutContext);
  const [amountOfItem, setAmountOfItem] = useState("");

  // --------------------------------------------------keeps track of change to the input (amount)
  const changeAmountHandler = (event) => {
    setAmountOfItem(Number(event.target.value));
  };
  // --------------------------------------------------keeps track of clicks to the add button (plus 1 to amount)
  const buttonClickHandler = (event) => {
    event.preventDefault();
    setAmountOfItem((prevAmount) => {
      return Number(prevAmount) + 1;
    });
  };
  // ----------------- when amountOfItem changes, finds index of current (outdated) object and removes it from checkoutCart array
  useEffect(() => {
    if (checkoutCart === "") {
      return;
    } else {
      let indexName = checkoutCart.findIndex((x) => x.name === props.name);
      checkoutCart.splice(indexName, 1);
    }
  }, [amountOfItem]);

  //------------logic to create and push a new updated object with correct amount onto the end of the checkoutCart array

  useEffect(() => {
    const checkoutCartItem = {
      name: props.name,
      id: props.id,
      amount: amountOfItem,
      price: props.price,
    };
    setCheckoutCart((previousCart) => {
      return [...previousCart, checkoutCartItem];
    });
  }, [amountOfItem, props.price, props.id, props.name, setCheckoutCart]);

  return (
    <form className="counter-form" onSubmit={buttonClickHandler}>
      <div className="counter-display">
        <div className="counter-text">Amount</div>
        <div>
          <input
            className="counter-input"
            type="number"
            step="1"
            min="0"
            value={amountOfItem}
            onChange={changeAmountHandler}
          ></input>
        </div>
      </div>
      <div className="counter-button-outdiv">
        <div className="counter-button-indiv">
          <button className="counter-button">+ Add</button>
        </div>
      </div>
    </form>
  );
};

export default FoodItemCounter;
