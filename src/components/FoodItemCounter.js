import React, {useContext} from "react";
import "../css/FoodItemCounter.css";
import { CheckoutContext } from "./context/CheckoutContext";

const FoodItemCounter = (props) => {

  // ----------------------------------------checkoutCart is array containing food objects id and their amounts 
   const cartCtx = useContext(CheckoutContext);
   const setCheckoutCart = cartCtx.setCheckoutCart
   const checkoutCart = cartCtx.checkoutCart


  // -------- changeAmountHandler grabs value and creates or modifies array entry (checkoutCart) based on id
  const changeAmountHandler = (event) => {
    setCheckoutCart((prevCheckout) => ( {...prevCheckout, 
      [props.id]: {
      id: +props.id,
      amount: +event.target.value,
      price: +props.price,
      name: props.name
      }
     }
    )
   )
  };

  //-----buttonClickHandler grabs current amount from checkoutCart, and updates checkoutCart with + 1
  const buttonClickHandler = (event) => {
    event.preventDefault();
    let currentAmount = checkoutCart[props.id]?.amount === undefined ? 1 : checkoutCart[props.id]?.amount + 1
    setCheckoutCart((prevCheckout) => ( {...prevCheckout, 
      [props.id]: {
      id: +props.id,
      amount: currentAmount,
      price: +props.price,
      name: props.name,
      }
     }
    )
   )
  };

   //  ------------- cartItemAmount recieves the amount from App.js and stores it in this component / two way binds
    const cartItemAmount =  checkoutCart[props.id]?.amount

  //  --------value of input is either undefined = '' , or = cartItemAmount. This way can be altered by checkoutCart.

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
            value={cartItemAmount === undefined ? '' : cartItemAmount}
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
