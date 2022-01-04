import React from "react";
import "../css/CheckoutOverlayItem.css";
const CheckoutOverlayItem = (props) => {
  const addButtonHandler = () => {
    props.buttonClickAdd(props.id);
  };
  const minusButtonHandler = () => {
    props.buttonClickMinus(props.id);
  };

  return (
    <div className="ol-item-container">
      <div className="ol-item-flexdirection">
        <div className="ol-item-container_inner">
          <div className="ol-item-name">{props.name}</div>
          <div className="container-price-amount">
            <div className="ol-item-price">{props.price}</div>
            <label className="ol-item-input">x {props.amount}</label>
          </div>
        </div>
        <div className="ol-item-button-container">
          <button className="ol-item-button" onClick={addButtonHandler}>
            +
          </button>
          <button className="ol-item-button" onClick={minusButtonHandler}>
            -
          </button>
        </div>
      </div>
      <div className="ol-item-UNDERLINE-DIV"></div>
    </div>
  );
};

export default CheckoutOverlayItem;
