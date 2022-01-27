import React, { useRef, useContext } from "react";
import { CheckoutContext } from "./context/CheckoutContext";
import "../css/Footer.css";
import { useState } from "react/cjs/react.development";
const Footer = () => {
  const cartCtx = useContext(CheckoutContext);
  const contactClicked = cartCtx.contactClicked;
  const setContactClicked = cartCtx.setContactClicked;
  const messagesEndRef = useRef(null);

  const [aboutText, setAboutText] = useState("About");
  const [contactText, setContactText] = useState("Contact");
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  if (contactClicked) {
    scrollToBottom();
    setContactClicked(false);
  }

  const aboutClickHandler = () => {
    if (aboutText === "About") {
      setAboutText("This is a great app.");
    } else if (aboutText === "This is a great app.") {
      setAboutText("Really, it is a good one.");
    } else if (aboutText === "Really, it is a good one.") {
      setAboutText("You really don't believe it.");
    } else if (aboutText === "You really don't believe it.") {
      setAboutText("How many times are you going to click...");
    } else if (aboutText === "How many times are you going to click...") {
      setAboutText("1");
    } else if (aboutText === "1") {
      setAboutText("2");
    } else if (aboutText === "2") {
      setAboutText("3");
    } else if (aboutText === "3") {
      setAboutText("4");
    } else if (aboutText === "4") {
      setAboutText("5");
    } else if (aboutText === "5") {
      setAboutText("ok..");
    } else if (aboutText === "ok..") {
      setAboutText("fine.");
    } else if (aboutText === "fine.") {
      setAboutText("im leaving..");
    } else if (aboutText === "im leaving..") {
      setAboutText("");
    }
  };
  const contactClickHandler = () => {
    setContactText("Email me @ sjhiggins37@gmail.com");
  };
  const helpClickHandler = () => {};
  return (
    <div className="main-footer-container">
      <ul className="main-footer-info">
        <li className="footer-clickable" onClick={aboutClickHandler}>
          {aboutText}
        </li>
        <li className="footer-clickable" onClick={contactClickHandler}>
          {contactText}
        </li>
        <a
          href="https://en.wikipedia.org/wiki/Help!"
          rel="noreferrer"
          className="footer-clickable-anchor"
          onClick={helpClickHandler}
          target="_blank"
        >
          Get help
        </a>
      </ul>

      <div ref={messagesEndRef} className="main-footer-copyright">
        Copyright © 2022 DummyFoods
      </div>
    </div>
  );
};

export default Footer;
