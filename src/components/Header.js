import React, { useContext } from "react";
import Cart from "./Cart";
import { CheckoutContext } from "./context/CheckoutContext";
import "../css/Header.css";

const Header = () => {
  const [, , , setIsCartClicked] = useContext(CheckoutContext);

  const cartClickHandler = () => {
    setIsCartClicked(true);

    // good idea: when one of the headers is clicked it filters by veg or meat : spo maybe include an all meals
  };
  return (
    <header className="header-container">
      <div className="header-logo">
        <h2>DummyFoods</h2>
      </div>
      <nav className="header-nav">
        <ul className="header-navlinks">
          <li>
            <a className="header-navlink">Meat Meals</a>
          </li>
          <li>
            <a className="header-navlink">Veg Meals</a>
          </li>
          <li>
            <a className="header-navlink">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="header-cart" onClick={cartClickHandler}>
        <Cart />
      </div>
      <div className="burger">
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </header>
  );
};

export default Header;
