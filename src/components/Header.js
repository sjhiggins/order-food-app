import React, { useContext } from "react";
import Cart from "./Cart";
import { CheckoutContext } from "./context/CheckoutContext";
import "../css/Header.css";
import { useState } from "react/cjs/react.development";
 // good idea: when one of the headers is clicked it filters by veg or meat : spo maybe include an all meals
const Header = () => {
  const cartCtx = useContext(CheckoutContext);
  const setIsCartClicked = cartCtx.setIsCartClicked
  const [navShow, setNavShow] = useState(false)
  const [navClass, setNavClass] = useState('header-nav')

  const cartClickHandler = () => {
    setIsCartClicked(true);
  };

  const burgerClickHandler = () => {
    setNavShow(!navShow)
    navShow ? setNavClass('header-nav') : setNavClass('nav-active')
  }
  console.log(navClass)
  return (
    <header className="header-container">
    <div className="burger" onClick={burgerClickHandler}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="header-logo">
        <h2>DummyFoods</h2>
      </div>
      <nav className={navClass}>
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
    </header>
  );
};

export default Header;
