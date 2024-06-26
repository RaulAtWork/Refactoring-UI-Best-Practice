import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Buttons from "./components/buttons";
import Header from "./components/header";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <div className="container">
      <Buttons />
    </div>
    <Footer />
  </React.StrictMode>
);
