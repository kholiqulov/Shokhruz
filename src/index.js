import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ModalContext } from "./Context/ModalContext";
import App from "./App";

// ---> Css
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ModalContext>
      <App />
    </ModalContext>
  </BrowserRouter>
);
