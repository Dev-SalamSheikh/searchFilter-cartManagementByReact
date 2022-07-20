import React from "react";
import { CartState } from "./context/Context";
import Filter from "./Filter";
import SingleProduct from "./SingleProduct";
import "./style.css";

const Home = () => {
  const {
    state: { products },
  } = CartState();
  return (
    <div className="home">
      <Filter />
      <div className="productContainer">
        {products.map((prod) => {
          return <SingleProduct prod={prod} key={prod.id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
