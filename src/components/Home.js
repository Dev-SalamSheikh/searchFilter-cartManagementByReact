import React from "react";
import { CartState } from "./context/Context";
import Filter from "./Filter";
import Header from "./Header";
import SingleProduct from "./SingleProduct";
import "./style.css";

const Home = () => {
  const {
    state: { products },
    productState: { sort, byFastDelivery, byRating, searchQuery },
  } = CartState();

  const transformProducts = () => {
    let sortedProduct = products;

    if (sort) {
      sortedProduct = sortedProduct.sort((a, b) =>
        sort === "lowToHigh" ? a.price - b.price : b.price - a.price
      );
    }
    if (byFastDelivery) {
      sortedProduct = sortedProduct.filter((prod) => prod.fastDelivery);
    }
    if (byRating) {
      sortedProduct = sortedProduct.filter((prod) => prod.ratings >= byRating);
    }

    if (searchQuery) {
      sortedProduct = sortedProduct.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }

    return sortedProduct;
  };

  return (
    <>
      <Header />
      <div className="home">
        <Filter />
        <div className="productContainer">
          {transformProducts().map((prod) => {
            return <SingleProduct prod={prod} key={prod.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
