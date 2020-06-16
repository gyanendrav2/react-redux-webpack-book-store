import { ADD_CART, DEC_CART_ORDER, DELETE_ORDER, REMOVE_ORDER } from "../Types/cart";

const initialState = {
  cart: [],
};
const orderReducer = (state = initialState, action: any) => {
  let newState = { ...state };
  switch (action.type) {
    case ADD_CART: {
      const exist = newState.cart.includes(action.payload);
      if (exist) {
        const index = newState.cart.indexOf(action.payload);
        newState.cart[index].totalQuant = newState.cart[index].totalQuant + 1;
      } else {
        newState.cart.push(action.payload);
        const index = newState.cart.indexOf(action.payload);
        newState.cart[index].totalQuant = 1;
      }
      return newState;
    }
    case DEC_CART_ORDER: {
      const index = newState.cart.indexOf(action.payload);
      if (newState.cart[index].totalQuant > 0) {
        newState.cart[index].totalQuant = newState.cart[index].totalQuant - 1;
      }
      return newState;
    }
    case DELETE_ORDER:{
      const index = newState.cart.indexOf(action.payload);
        newState.cart.splice(index, 1);
        return newState;
    }
    case REMOVE_ORDER:{
      newState.cart = [];
      return newState;
    }

    default:
      return newState;
  }
};

export default orderReducer;
