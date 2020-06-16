import { MY_ORDER } from "../Types/cart";

const initialState = {
  cart: [],
};
const myOrders = (state = initialState, action: any) => {
  let newState = { ...state };
  switch (action.type) {
    case MY_ORDER: {
      newState.cart.push(...action.payload)
      return newState;
    }
    default:
      return newState;
  }
};

export default myOrders;
