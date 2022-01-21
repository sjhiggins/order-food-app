import React, { useContext } from "react";
import { CheckoutContext } from "./context/CheckoutContext";
import "../css/CheckoutFooter.css";
const CheckoutFooter = (props) => {
  const cartCtx = useContext(CheckoutContext);
  const setIsCartClicked = cartCtx.setIsCartClicked
  const checkoutCartArray = props.checkoutCartArray

  const clickHandler = () => {
    setIsCartClicked(false);
  };

// function to work out total price for dynamic output 

  const totalPriceProduct = (cart) => {
    let totalPrice = 0
    for (let i = 0; i<cart.length; i++) {
      totalPrice = totalPrice + (cart[i].price * cart[i].amount)
    }
   return totalPrice
  }

  let totalPrice= totalPriceProduct(checkoutCartArray).toFixed(2)

  const orderHandler = () => {
    alert('Order Recieved!')
  }

  return (
    <div className="checkout-footer-container">
      {<div className="footer-text-cost-container">
        <div className="footer-text">Total Amount:</div>
        <label className="footer-text cost">£{totalPrice}</label>
      </div>}
      <div className="footer-buttons-container">
        <button onClick={clickHandler} className="footer-button">
          Close
        </button>
        { totalPrice > 0 
        && 
        <button className="footer-button order" onClick={orderHandler}>Order</button>
        }
      </div>
    </div>
  );
};

export default CheckoutFooter;
