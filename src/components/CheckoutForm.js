import React, { useState, useContext, useEffect } from "react";
import "../css/CheckoutForm.css";
import { CheckoutContext } from "./context/CheckoutContext";
const CheckoutForm = () => {
  const cartCtx = useContext(CheckoutContext);
  const setIsOrderClicked = cartCtx.setIsOrderClicked;
  const checkoutCart = cartCtx.checkoutCart;
  const setIsOrderSubmitted = cartCtx.setIsOrderSubmitted;
  const setUserOrder = cartCtx.setUserOrder;
  // -------------------------------------------------Loading state
  const [isLoading, setIsLoading] = useState(false);
  // ---------------------------------------------------state storing entered details
  const [enteredName, setEnteredName] = useState("");
  const [enteredNumber, setEnteredNumber] = useState("");
  const [enteredAddress, setEnteredAddress] = useState("");
  const [enteredPostcode, setEnteredPostcode] = useState("");
  let userInfo = {};
  // ---------------------------------------------------state storing global form validation
  const [isFormValid, setIsFormValid] = useState(false);
  // ---------------------------------------------------state storing individual entry validation
  const [isNameValid, setIsNameValid] = useState(false);
  const [isNumberValid, setIsNumberValid] = useState(false);
  const [isAddressValid, setIsAddressValid] = useState(false);
  const [isPostcodeValid, setIsPostcodeValid] = useState(false);

  // ---------------------------------------------------state storing individual entry css
  const [nameCSS, setNameCSS] = useState("checkout-input");
  const [numberCSS, setNumberCSS] = useState("checkout-input");
  const [addressCSS, setAddressCSS] = useState("checkout-input");
  const [postcodeCSS, setPostcodeCSS] = useState("checkout-input");

  // ---------------------------------------------------state storing invalid message
  const [invalidMessage, setInvalidMessage] = useState("");
  // ---------------------------------------------------state storing http error message
  const [httpError, setHttpError] = useState("");
  console.log(httpError);
  // ---------------------------------------------------cancel form logic
  const cancelHandler = (event) => {
    event.preventDefault();
    setIsOrderClicked(false);
  };
  // --------------------------------------------------- handling data changes in inputs
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
    if (event.target.value.length > 0) {
      setIsNameValid(true);
      setNameCSS("checkout-input");
    } else {
      setIsNameValid(false);
    }
  };
  const numberChangeHandler = (event) => {
    setEnteredNumber(event.target.value);
    if (event.target.value.length > 0) {
      setIsNumberValid(true);
      setNumberCSS("checkout-input");
    } else {
      setIsNumberValid(false);
    }
  };
  const addressChangeHandler = (event) => {
    setEnteredAddress(event.target.value);
    if (event.target.value.length > 0) {
      setIsAddressValid(true);
      setAddressCSS("checkout-input");
    } else {
      setIsAddressValid(false);
    }
  };

  const postcodeChangeHandler = (event) => {
    setEnteredPostcode(event.target.value);
    if (event.target.value.length > 0) {
      setIsPostcodeValid(true);
      setPostcodeCSS("checkout-input");
    } else {
      setIsPostcodeValid(false);
    }
  };

  // --------------------------------------------------- useEffect to handle total form validation

  useEffect(() => {
    if (isNameValid && isNumberValid && isAddressValid && isPostcodeValid) {
      setIsFormValid(true);
      setInvalidMessage("");
    } else {
      setIsFormValid(false);
    }
  }, [isNameValid, isNumberValid, isAddressValid, isPostcodeValid]);

  //-------------------------------------------- making http request, posting user info to firebase server
  const postDataHandler = async (userInfo) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://httppractise1-default-rtdb.firebaseio.com/UserInfo.json",
        {
          method: "POST",
          body: JSON.stringify(userInfo),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      console.log(data.name);

      setUserOrder(data);

      setIsLoading(false);
      setEnteredName("");
      setEnteredNumber("");
      setEnteredAddress("");
      setEnteredPostcode("");
      setIsOrderSubmitted(true);
    } catch (error) {
      setHttpError(error.message);
    }
  };
  // ---------------- form submit handler prevents page reload, handles order function and sets invalid css

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (isFormValid) {
      userInfo = {
        name: enteredName,
        number: enteredNumber,
        address: enteredAddress,
        postcode: enteredPostcode,
        order: checkoutCart,
      };
      setIsLoading(true);
      setTimeout(() => {
        postDataHandler(userInfo);
      }, 1000);

      setInvalidMessage("");

      console.log("Ordering now");

      setNameCSS("checkout-input");
      setNumberCSS("checkout-input");
      setAddressCSS("checkout-input");
      setPostcodeCSS("checkout-input");
    } else {
      setInvalidMessage("Please enter all of your details.");
      console.log("INVALID!!!");
      setNameCSS(
        isNameValid ? "checkout-input" : "checkout-input invalid-input"
      );
      setNumberCSS(
        isNumberValid ? "checkout-input" : "checkout-input invalid-input"
      );
      setAddressCSS(
        isAddressValid ? "checkout-input" : "checkout-input invalid-input"
      );
      setPostcodeCSS(
        isPostcodeValid ? "checkout-input" : "checkout-input invalid-input"
      );
    }
  };

  return (
    <form className="checkout-form" onSubmit={formSubmitHandler}>
      <div className="form-div-placement">
        <label className="checkout-label">
          <span>{invalidMessage}</span> Your Name
        </label>
        <input
          className={nameCSS}
          type="text"
          value={enteredName}
          onChange={nameChangeHandler}
        ></input>
      </div>
      <div className="form-div-placement">
        <label className="checkout-label">Mobile Number</label>
        <input
          className={numberCSS}
          type="tel"
          step="1"
          onChange={numberChangeHandler}
          value={enteredNumber}
        ></input>
      </div>
      <div className="form-div-placement">
        <label className="checkout-label">Delivery Address</label>
        <input
          className={addressCSS}
          type="text"
          onChange={addressChangeHandler}
          value={enteredAddress}
        ></input>
      </div>
      <div className="form-div-placement">
        <label className="checkout-label">Postcode</label>
        <input
          className={postcodeCSS}
          type="text"
          onChange={postcodeChangeHandler}
          value={enteredPostcode}
        ></input>
      </div>
      <div className="footer-buttons-container order-buttons checkout-button">
        {isLoading && <div className="loading-post-data"></div>}
        <button className="footer-button" onClick={cancelHandler}>
          Cancel
        </button>
        <button className="footer-button order-checkout">Confirm</button>
      </div>
    </form>
  );
};

export default CheckoutForm;
