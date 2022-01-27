import React, { useContext } from "react";
import { CheckoutContext } from "./context/CheckoutContext";
import "../css/CheckoutFooter.css";
const CheckoutFooter = (props) => {
  const cartCtx = useContext(CheckoutContext);
  const setIsCartClicked = cartCtx.setIsCartClicked;
  const setIsOrderClicked = cartCtx.setIsOrderClicked;
  const isOrderClicked = cartCtx.isOrderClicked;
  const checkoutCartArray = props.checkoutCartArray;
  const isOrderSubmitted = cartCtx.isOrderSubmitted;

  const clickHandler = () => {
    setIsCartClicked(false);
  };

  // function to work out total price for dynamic output

  const totalPriceProduct = (cart) => {
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      totalPrice = totalPrice + cart[i].price * cart[i].amount;
    }
    return totalPrice;
  };

  let totalPrice = totalPriceProduct(checkoutCartArray).toFixed(2);

  const checkoutHandler = () => {
    setIsOrderClicked(true);
  };
  //--------------------------------------------------------------------------changing text display depending on submission
  let totalAmountText = !isOrderSubmitted ? "Total Amount:" : "Receipt:";
  return (
    <div className="checkout-footer-container">
      {
        <div className="footer-text-cost-container">
          <div className="footer-text">{totalAmountText}</div>
          <label className="footer-text cost">£{totalPrice}</label>
        </div>
      }
      {!isOrderClicked && (
        <div className="footer-buttons-container">
          <button onClick={clickHandler} className="footer-button">
            Close
          </button>
          {totalPrice > 0 && (
            <button
              className="footer-button order-checkout"
              onClick={checkoutHandler}
            >
              Order
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default CheckoutFooter;
