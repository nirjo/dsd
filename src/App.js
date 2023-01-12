import React, { useState } from "react";
import "./styles.css";
import Header from "./components/Header";
import Basket from "./components/Basket";
import Main from "./components/Main";
import data from "./data.js";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const { products } = data;
  const onAdd = (product) => {
    console.log("onadd");
  };
  const onRemove = (product) => {
    console.log("onremove");
  };

  return (
    <div>
      <Header />
      <div className="row">
        <Main onAdd={onAdd} onRemove={onRemove} products={products} />
        <Basket />
      </div>
    </div>
  );
};

export default App;
