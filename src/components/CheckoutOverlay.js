import React, { useContext, useEffect, useState } from "react";
import CheckoutOverlayItem from "./CheckoutOverlayItem";
import "../css/CheckoutOverlay.css";
import { CheckoutContext } from "./context/CheckoutContext";
import CheckoutFooter from "./CheckoutFooter";

const CheckoutOverlay = (props) => {
  const [, , , setIsCartClicked] = useContext(CheckoutContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const updatedCheckout = props.updatedCheckout;

  //   calculates total sum by doing sum of all the object.amount * object.price
  useEffect(() => {
    let total = 0;
    for (let i = 0; i < updatedCheckout.length; i++) {
      total += updatedCheckout[i].amount * updatedCheckout[i].price;
    }
    setTotalAmount(total);
  }, [updatedCheckout]);

  console.log(totalAmount);

  const clickHandle = () => {
    console.log("clicked");
    setIsCartClicked(false);
  };

  return (
    <div className="ol-container_outer">
      <div className="ol-container ">
        <div>
          {updatedCheckout === 0
            ? null
            : updatedCheckout.map((object) => {
                return (
                  <CheckoutOverlayItem
                    name={object.name}
                    id={object.id}
                    amount={object.amount}
                    price={object.price}
                    key={object.id}
                    buttonClickAdd={props.buttonClickAdd}
                    buttonClickMinus={props.buttonClickMinus}
                  />
                );
              })}
        </div>
        <CheckoutFooter
          updatedCheckout={updatedCheckout}
          totalAmount={totalAmount}
        />
      </div>
      <div className="ol-container_clickable" onClick={clickHandle}></div>
    </div>
  );
};

export default CheckoutOverlay;
