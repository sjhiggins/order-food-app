import React, { useContext } from "react";
import { CheckoutContext } from "./context/CheckoutContext";
import "../css/CheckoutFooter.css";
const CheckoutFooter = (props) => {
  const [, , , setIsCartClicked] = useContext(CheckoutContext);

  const clickHandler = () => {
    setIsCartClicked(false);
  };

  let totalAmount = props.totalAmount.toFixed(2);

  return (
    <div className="checkout-footer-container">
      <div className="footer-text-cost-container">
        <div className="footer-text">Total Amount:</div>
        <label className="footer-text cost">£{totalAmount}</label>
      </div>
      <div className="footer-buttons-container">
        <button onClick={clickHandler} className="footer-button">
          Close
        </button>
        <button className="footer-button order">Order</button>
      </div>
    </div>
  );
};

export default CheckoutFooter;
