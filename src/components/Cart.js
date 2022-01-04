import React, { useContext, useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CheckoutContext } from "./context/CheckoutContext";
import "../css/Cart.css";

const Cart = () => {
  const [checkoutCart] = useContext(CheckoutContext);
  const [sumItems, setSumItems] = useState(0);

  useEffect(() => {
    // Adding up the number of items

    if (checkoutCart === "") {
      return;
    } else {
      const itemAmounts = checkoutCart.map((e) => {
        return Number(e.amount);
      });
      let sum = 0;
      for (let i = 0; i < itemAmounts.length; i++) {
        sum += itemAmounts[i];
      }
      // console.log(itemAmounts);
      setSumItems(sum);
    }
  }, [checkoutCart]);

  return (
    <div className="cart-container">
      <div className="cart-icon">
        <FaShoppingCart size="1.4rem" />
      </div>
      <div className="cart-text">
        <h4>Your Cart</h4>
      </div>
      <div className="cart-number-container">
        <div className="cart-number">
          <h4>{sumItems}</h4>
        </div>
      </div>
    </div>
  );
};

export default Cart;
