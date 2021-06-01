import React from "react";
import "./styles.css";
import { Route } from "react-router-dom";

import Products from "./components/Products";
import Cart from "./components/Cart";

import { data } from "./data";

export default function App() {
  return (
    <div className="App">

      <Route exact path="/" component={Products} />
      <Route path="/cart" component={Cart} />
    </div>
  );
}
