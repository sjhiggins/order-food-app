import React, { useContext } from "react";
import { CheckoutContext } from "./context/CheckoutContext";
import "../css/Receipt.css";

const Receipt = () => {
  const cartCtx = useContext(CheckoutContext);
  const setIsOrderSubmitted = cartCtx.setIsOrderSubmitted;
  const setCheckoutCart = cartCtx.setCheckoutCart;
  const setIsCartClicked = cartCtx.setIsCartClicked;
  const setIsOrderClicked = cartCtx.setIsOrderClicked;
  const userOrder = cartCtx.userOrder;
  const uniqueID = userOrder.uniqueID;
  const userInfo = userOrder.userInfo;

  // ------------------------------------- adding half an hour to current time for delivery approximation
  let ampm = "AM";
  let date = new Date();
  let date2 = new Date();
  let dateHour = date2.getHours();
  console.log(dateHour);
  if (dateHour >= 0 && dateHour < 12) {
    ampm = "AM";
  } else if (dateHour >= 12 && dateHour < 24) {
    ampm = "PM";
  }
  date2.setTime(date.getTime() + 30 * 60 * 1000);
  let deliveryTime = date2.toLocaleTimeString();
  deliveryTime = deliveryTime.substring(0, deliveryTime.length - 3);

  // ------------------------------------- converting object to array and mapppingorder
  let order = Object.values(userInfo.order);
  console.log(order);

  const receiptOrderMap = (object) => {
    return (
      <div key={object.id}>
        {object.amount} {object.name}
        {", "}
      </div>
    );
  };
  // -------------------------------------resetting logic for new cart
  const orderAgainHandler = () => {
    setIsOrderSubmitted(false);
    setCheckoutCart([]);
    setIsCartClicked(false);
    setIsOrderClicked(false);
  };

  return (
    <div className="receipt-container">
      <div className="receipt-writing-button-container">
        <div className="receipt-writing">
          <p>
            <strong>Name: </strong>
            {userInfo.name}
          </p>
          <p>
            <strong>Mobile number:</strong> {userInfo.number}
          </p>
          <div className="receipt-id">
            <p>
              <strong>Unique order reference:</strong> {uniqueID}{" "}
            </p>
          </div>
          <div className="receipt-message">
            Your order of:{" "}
            <div className="receipt-order">
              <strong>{order.map(receiptOrderMap)}</strong>
            </div>
            will be delivered to{" "}
            <strong>
              {userInfo.address}, {userInfo.postcode},
            </strong>{" "}
            for approximately{" "}
            <strong>
              {deliveryTime} {ampm}.
            </strong>
          </div>
        </div>
        <div className="receipt-button-container">
          <div className="receipt-cooking-message">
            Request received! Cooking up . . .
          </div>
          <button className="receipt-button" onClick={orderAgainHandler}>
            Order again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
