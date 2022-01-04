import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Background from "./Background";
import HomeBanner from "./HomeBanner";
import FoodList from "./FoodList";
import CheckoutOverlay from "./CheckoutOverlay";
import { CheckoutContext } from "./context/CheckoutContext";

function App() {
  const [checkoutCart, , isCartClicked] = useContext(CheckoutContext);
  const [updatedCheckout, setUpdatedCheckout] = useState([]);

  // ---------------------------creates new cart and pushes object on if amount is greater than 0 : sets cart to updatedCheckout
  useEffect(() => {
    let updatedCart = [];
    for (let i = 0; i < checkoutCart.length; i++) {
      if (checkoutCart[i].amount === "" || checkoutCart[i].amount === 0) {
      } else {
        updatedCart.push(checkoutCart[i]);
      }
    }
    setUpdatedCheckout(updatedCart);
  }, [checkoutCart]);

  // overlay button click functionality. Grabs index of obj from checkout, maps to find checkout obj that matches, adds 1 to amount

  const buttonClickAdd = (index) => {
    if (updatedCheckout[index].amount < 0) {
      return;
    }
    let x = updatedCheckout.map((obj) => {
      if (obj.id === index) {
        return { ...obj, amount: Number(updatedCheckout[index].amount) + 1 };
      }
      return obj;
    });
    setUpdatedCheckout(x);
  };
  // overlay button click functionality. Grabs index of obj from checkout, maps to find checkout obj that matches, minus 1 to amount
  const buttonClickMinus = (index) => {
    if (updatedCheckout[index].amount < 1) {
      return;
    }
    let x = updatedCheckout.map((obj) => {
      if (obj.id === index) {
        return { ...obj, amount: Number(updatedCheckout[index].amount) - 1 };
      }
      return obj;
    });
    setUpdatedCheckout(x);
  };

  // console.log(updatedCheckout2);
  console.log(updatedCheckout);
  return (
    <div>
      <Header />
      {isCartClicked ? (
        <CheckoutOverlay
          updatedCheckout={updatedCheckout}
          buttonClickAdd={buttonClickAdd}
          buttonClickMinus={buttonClickMinus}
        />
      ) : null}
      <HomeBanner />
      <FoodList />
      <Background />
    </div>
  );
}

export default App;
