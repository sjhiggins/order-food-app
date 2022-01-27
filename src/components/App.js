import React, { useContext } from "react";
import { CheckoutContext } from "./context/CheckoutContext";
import Header from "./Header";
import Background from "./Background";
import HomeInfo from "./HomeInfo";
import FoodList from "./FoodList";
import CheckoutOverlay from "./CheckoutOverlay";
import Footer from "./Footer";

function App() {
  const cartCtx = useContext(CheckoutContext);
  const checkoutCart = cartCtx.checkoutCart;
  const isCartClicked = cartCtx.isCartClicked;
  const isLoading = cartCtx.isLoading;
  return (
    <div>
      <Header />
      {isCartClicked ? <CheckoutOverlay checkoutCart={checkoutCart} /> : null}
      <HomeInfo />
      <FoodList checkoutCart={checkoutCart} />
      {!isLoading && <Footer />}
      <Background />
    </div>
  );
}

export default App;
