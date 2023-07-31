import React, { useContext } from "react";
import CartContext from "../context/cart/cartContext";
import { removeFromCart } from "../context/cart/cartActions";

const CartItem = ({ cartItem }) => {
  const { dispatch } = useContext(CartContext);

  const handleRemove = (id) => {
    const data = removeFromCart(id);
    dispatch({
      type: "REMOVE_CART",
      payload: id,
    });
  };

  return (
    <div className="cart-item">
      <img src={cartItem.image} alt="" />
      <span>
        <h1>{cartItem.title}</h1>
        <h3>Rate : ${cartItem.price}</h3>
        <h3>Qty : 1</h3>
      </span>
      <button className="remove-btn" onClick={() => handleRemove(cartItem.id)}>
        Remove Item
      </button>
    </div>
  );
};

export default CartItem;
