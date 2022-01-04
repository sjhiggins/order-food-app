import React from "react";
import ReactDOM from "react-dom";
import "./css/styles.css";
import App from "./components/App";

// context
import { CheckoutProvider } from "./components/context/CheckoutContext";

ReactDOM.render(
  <CheckoutProvider>
    <App />
  </CheckoutProvider>,
  document.getElementById("root")
);
