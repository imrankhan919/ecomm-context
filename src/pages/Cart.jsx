import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import CartContext from "../context/cart/cartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((p, c) => {
    return p + c.price;
  }, 0);

  return (
    <>
      <div className="cart-container">
        <div className="cart-items">
          {cart.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>

        <div className="bill-section">
          <h1>
            Total Amount : <br /> <br /> ${total}
          </h1>
          <button className="pay-btn">Pay Now</button>
        </div>
      </div>

      <footer>
        <h4>All Rights Reserved &copy; MY.STORE</h4>
      </footer>
    </>
  );
};

export default Cart;
