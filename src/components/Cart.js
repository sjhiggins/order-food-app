import React,{useContext}from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CheckoutContext } from "./context/CheckoutContext";
import "../css/Cart.css";

const Cart = () => {
  const cartCtx = useContext(CheckoutContext);
 const checkoutCart  = Object.values(cartCtx.checkoutCart)

//  function to add up amounts in the array
 const addFunction = (cart) => {

   let numberOfItems = 0

   for(let i=0 ; i<cart.length; i++){
     numberOfItems = numberOfItems + cart[i].amount
   }
  return numberOfItems
 }

  let numberOfItems = addFunction(checkoutCart)

  return (
    <div className="cart-container">
      <div className="cart-icon">
        <FaShoppingCart size="1.4em" />
      </div>
      <div className="cart-text">
        <h4>Your Cart</h4>
      </div>
      <div className="cart-number-container">
        <div className="cart-number">
          <h4>{numberOfItems}</h4>
        </div>
      </div>
    </div>
  );
};

export default Cart;
