import React, { useState, createContext } from "react";

export const CheckoutContext = createContext();

export const CheckoutProvider = (props) => {
  const [checkoutCart, setCheckoutCart] = useState("");
  const [isCartClicked, setIsCartClicked] = useState(false);
  return (
    <CheckoutContext.Provider
      value={[checkoutCart, setCheckoutCart, isCartClicked, setIsCartClicked]}
    >
      {props.children}
    </CheckoutContext.Provider>
  );
};
