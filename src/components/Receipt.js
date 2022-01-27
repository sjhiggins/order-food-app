import React, { useContext } from "react";
import { CheckoutContext } from "./context/CheckoutContext";
import "../css/Receipt.css";

const Receipt = () => {
  const cartCtx = useContext(CheckoutContext);
  const userOrder = cartCtx.userOrder;
  return (
    <div className="receipt-container">
      <div className="receipt-writing-button-container">
        <div className="receipt-writing">
          Unique order reference: {userOrder.name}
        </div>
        <div className="receipt-button-container">
          <div className="spacer"></div>
          <button className="receipt-button">Order again</button>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
