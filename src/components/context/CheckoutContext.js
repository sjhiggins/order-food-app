import React, { useState, createContext } from "react";

export const CheckoutContext = createContext();

export const CheckoutProvider = (props) => {
  const [checkoutCart, setCheckoutCart] = useState([]);
  const [isCartClicked, setIsCartClicked] = useState(false);
  const [isOrderClicked, setIsOrderClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOrderSubmitted, setIsOrderSubmitted] = useState(false);
  const [userOrder, setUserOrder] = useState("hello");

  const cartContext = {
    checkoutCart: checkoutCart,
    setCheckoutCart: setCheckoutCart,
    isCartClicked: isCartClicked,
    setIsCartClicked: setIsCartClicked,
    isOrderClicked: isOrderClicked,
    setIsOrderClicked: setIsOrderClicked,
    isLoading: isLoading,
    setIsLoading: setIsLoading,
    isOrderSubmitted: isOrderSubmitted,
    setIsOrderSubmitted: setIsOrderSubmitted,
    userOrder: userOrder,
    setUserOrder: setUserOrder,
  };

  return (
    <CheckoutContext.Provider value={cartContext}>
      {props.children}
    </CheckoutContext.Provider>
  );
};
