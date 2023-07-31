import React, { useContext } from "react";
import { addToCart } from "../context/cart/cartActions";
import CartContext from "../context/cart/cartContext";

const ProductCard = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  const handleClick = (product) => {
    const data = addToCart(product);
    dispatch({
      type: "ADD_CART",
      payload: data,
    });
  };

  return (
    <div class="product">
      <img src={product.image} alt="" />
      <h1>{product.title}</h1>
      <span>
        <h3>Price : {product.price}</h3>
        <button class="add_cart" onClick={() => handleClick(product)}>
          Add to cart
        </button>
      </span>
    </div>
  );
};

export default ProductCard;
