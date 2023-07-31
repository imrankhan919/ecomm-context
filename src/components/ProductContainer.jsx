import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductContext from "../context/products/productContext";
import { getProducts } from "../context/products/productActions";

const ProductContainer = () => {
  const { products, dispatch } = useContext(ProductContext);

  const fetchData = async () => {
    const data = await getProducts();
    dispatch({
      type: "FETCH_PRODUCTS",
      payload: data,
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!products || products.length === 0) {
    return (
      <div className="container">
        <h1 class="all-products-title">Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div class="container">
        <h1 class="all-products-title">All Products</h1>

        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductContainer;
