import React, { useContext } from "react";
import "../css/CheckoutOverlayItem.css";
import { CheckoutContext } from "./context/CheckoutContext";
const CheckoutOverlayItem = (props) => {
  const cartCtx = useContext(CheckoutContext);
  const checkoutCart = cartCtx.checkoutCart;
  const setCheckoutCart = cartCtx.setCheckoutCart;

  // add/minusbuttonHandlers set checkoutCart to itself with amount either +1 or -1

  const addButtonHandler = () => {
    setCheckoutCart((prevCart) => {
      return {
        ...prevCart,
        [props.id]: {
          id: checkoutCart[props.id]?.id,
          amount: checkoutCart[props.id]?.amount + 1,
          price: checkoutCart[props.id]?.price,
          name: checkoutCart[props.id]?.name,
        },
      };
    });
  };

  // minusButtonHandler checks if amount of item is about to hit 0 and removes it from checkoutCart

  const minusButtonHandler = () => {
    checkoutCart[props.id]?.amount === 1
      ? setCheckoutCart((prevCart) => {
          delete prevCart[props.id];
          return { ...prevCart };
        })
      : setCheckoutCart((prevCart) => {
          return {
            ...prevCart,
            [props.id]: {
              id: checkoutCart[props.id]?.id,
              amount:
                checkoutCart[props.id]?.amount > 1
                  ? checkoutCart[props.id]?.amount - 1
                  : 0,
              price: checkoutCart[props.id]?.price,
              name: checkoutCart[props.id]?.name,
            },
          };
        });
  };

  console.log(checkoutCart);
  return (
    <div className="ol-item-container">
      <div className="ol-item-flexdirection">
        <div className="ol-item-container_inner">
          <div className="ol-item-name">{props.name}</div>
          <div className="container-price-amount">
            <div className="ol-item-price">£{props.price.toFixed(2)}</div>
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
