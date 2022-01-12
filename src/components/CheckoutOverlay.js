import React, { useContext } from "react";
import CheckoutOverlayItem from "./CheckoutOverlayItem";
import "../css/CheckoutOverlay.css";
import { CheckoutContext } from "./context/CheckoutContext";
import CheckoutFooter from "./CheckoutFooter";

const CheckoutOverlay = (props) => {
  const cartCtx = useContext(CheckoutContext);
  const setIsCartClicked = cartCtx.setIsCartClicked
  const checkoutCartArray = Object.values(props.checkoutCart)

  const clickHandle = () => {
    console.log("clicked");
    setIsCartClicked(false);
  };

  return (
    <div className="ol-container_outer">
      <div className="ol-container ">
        <div className="ol-container-scroll">
          {checkoutCartArray.length === 0
            ? 
            <div><h3>Please Add To Your Order</h3></div>
            : 
            checkoutCartArray.map((object) => {
                return (
                  object === 0 ? null : <CheckoutOverlayItem
                    name={object.name}
                    id={object.id}
                    amount={object.amount}
                    price={object.price}
                    key={object.id}
                  />
                );
              })}

        </div>
        <CheckoutFooter
          checkoutCartArray={checkoutCartArray}
        />
      </div>
      <div className="ol-container_clickable" onClick={clickHandle}></div>
    </div>
  );
};

export default CheckoutOverlay;
