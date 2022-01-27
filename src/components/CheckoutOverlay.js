import React, { useContext } from "react";
import { CheckoutContext } from "./context/CheckoutContext";
import "../css/CheckoutOverlay.css";
import CheckoutOverlayItem from "./CheckoutOverlayItem";
import CheckoutFooter from "./CheckoutFooter";
import CheckoutForm from "./CheckoutForm";
import Receipt from "./Receipt";

const CheckoutOverlay = (props) => {
  const cartCtx = useContext(CheckoutContext);
  const setIsCartClicked = cartCtx.setIsCartClicked;
  const isOrderClicked = cartCtx.isOrderClicked;
  const setIsOrderClicked = cartCtx.setIsOrderClicked;
  const isOrderSubmitted = cartCtx.isOrderSubmitted;
  const checkoutCartArray = Object.values(props.checkoutCart);

  const clickHandle = () => {
    console.log("clicked");
    setIsCartClicked(false);
    setIsOrderClicked(false);
  };

  const scrollHeightCSS = !isOrderClicked
    ? "ol-container-scroll-clicked"
    : "ol-container-scroll";

  return (
    <div className="ol-container_outer">
      <div className="ol-container ">
        <div className={scrollHeightCSS}>
          {checkoutCartArray.length === 0 ? (
            <div className="add-order">
              <h3>Please Add To Your Order!</h3>
            </div>
          ) : (
            checkoutCartArray.map((object) => {
              return object === 0 ? null : (
                <CheckoutOverlayItem
                  name={object.name}
                  id={object.id}
                  amount={object.amount}
                  price={object.price}
                  key={object.id}
                />
              );
            })
          )}
        </div>
        <CheckoutFooter checkoutCartArray={checkoutCartArray} />
        {isOrderClicked && !isOrderSubmitted && <CheckoutForm />}
        {isOrderSubmitted && <Receipt />}
      </div>
      <div className="ol-container_clickable" onClick={clickHandle}></div>
    </div>
  );
};

export default CheckoutOverlay;
