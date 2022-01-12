import React, { useState, createContext } from "react";

export const CheckoutContext = createContext();

export const CheckoutProvider = (props) => {

  const [checkoutCart, setCheckoutCart] = useState([]);
  const [isCartClicked, setIsCartClicked] = useState(false);

  const cartContext = {
    checkoutCart: checkoutCart,
    setCheckoutCart: setCheckoutCart,
    isCartClicked: isCartClicked,
    setIsCartClicked:setIsCartClicked
  }


  return (
    <CheckoutContext.Provider value={cartContext}>
      {props.children}
    </CheckoutContext.Provider>
  );
};
