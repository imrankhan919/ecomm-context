const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        cart: [action.payload, ...state.cart],
      };

    case "REMOVE_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default CartReducer;
