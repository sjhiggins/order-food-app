import React, { useContext } from "react";
import Header from "./Header";
import Background from "./Background";
import HomeInfo from "./HomeInfo";
import FoodList from "./FoodList";
import CheckoutOverlay from "./CheckoutOverlay";
import { CheckoutContext } from "./context/CheckoutContext";

function App() {
  const cartCtx = useContext(CheckoutContext);
  const checkoutCart = cartCtx.checkoutCart
  const isCartClicked = cartCtx.isCartClicked

  console.log(checkoutCart)
  return (
    <div>
      <Header />
      {isCartClicked ? (
        <CheckoutOverlay
          checkoutCart={checkoutCart}
        />
      ) : null}
      <HomeInfo />
      <FoodList checkoutCart={checkoutCart}
      />
      <Background />
    </div>
  );
}

export default App;
