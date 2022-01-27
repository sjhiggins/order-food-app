import React, { useContext } from "react";
import Cart from "./Cart";
import { CheckoutContext } from "./context/CheckoutContext";
import "../css/Header.css";
import { useState } from "react/cjs/react.development";
// good idea: when one of the headers is clicked it filters by veg or meat : spo maybe include an all meals
const Header = () => {
  const cartCtx = useContext(CheckoutContext);
  const setIsCartClicked = cartCtx.setIsCartClicked;
  const meatClicked = cartCtx.meatClicked;
  const vegClicked = cartCtx.vegClicked;
  const setMeatClicked = cartCtx.setMeatClicked;
  const setVegClicked = cartCtx.setVegClicked;
  const setContactClicked = cartCtx.setContactClicked;
  const [navShow, setNavShow] = useState(false);
  const [navClass, setNavClass] = useState("header-nav");
  const [meatCSS, setMeatCSS] = useState("header-navlink");
  const [vegCSS, setVegCSS] = useState("header-navlink");

  // ---------------------------------------------header veg and meat filter logic
  const meatClickHandler = () => {
    if (meatClicked && vegClicked) {
      setVegClicked(false);
      setVegCSS("header-navlink greyed-out");
    } else if (!meatClicked && vegClicked) {
      setVegClicked(false);
      setMeatClicked(true);
      setMeatCSS("header-navlink");
      setVegCSS("header-navlink greyed-out");
    } else if (meatClicked && !vegClicked) {
      setVegClicked(true);
      setMeatClicked(true);
      setMeatCSS("header-navlink");
      setVegCSS("header-navlink");
    }
  };

  const vegClickHandler = () => {
    if (meatClicked && vegClicked) {
      setMeatClicked(false);
      setMeatCSS("header-navlink greyed-out");
    } else if (meatClicked && !vegClicked) {
      setVegClicked(true);
      setMeatClicked(false);
      setMeatCSS("header-navlink greyed-out");
      setVegCSS("header-navlink");
    } else if (!meatClicked && vegClicked) {
      setVegClicked(true);
      setMeatClicked(true);
      setMeatCSS("header-navlink");
      setVegCSS("header-navlink");
    }
  };

  const contactClickHandler = () => {
    setContactClicked(true);
  };
  // ---------------------------------------------header cart clicking logic
  const cartClickHandler = () => {
    setIsCartClicked(true);
  };
  // --------------------------------------------- navbar logic
  const burgerClickHandler = () => {
    setNavShow(!navShow);
    navShow ? setNavClass("header-nav") : setNavClass("nav-active");
  };
  console.log(navClass);
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
            <div className={meatCSS} onClick={meatClickHandler}>
              Meat Meals
            </div>
          </li>
          <li>
            <div className={vegCSS} onClick={vegClickHandler}>
              Veg Meals
            </div>
          </li>
          <li>
            <div className="header-navlink" onClick={contactClickHandler}>
              Contact
            </div>
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
