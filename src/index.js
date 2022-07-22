import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import Context from "./components/context/Context";
import { FirebaseProvider } from "./components/context/Firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <FirebaseProvider>
      <Context>
        <App />
      </Context>
    </FirebaseProvider>
  </BrowserRouter>
);
