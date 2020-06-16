import { ADMIN_ORDERS, UPDATE_ORDER } from "../Types/cart";

const initialState = {
  cart: [],
};
const adminOrders = (state = initialState, action: any) => {
  let newState = { ...state };
  switch (action.type) {
    case ADMIN_ORDERS: {
        action.payload.map(item=>{
            item.status = "paid"
        })
     newState.cart.push(...action.payload);

      return newState;
    }
    case UPDATE_ORDER: {
      newState.cart[action.index].status = action.payload;
      return newState;
    }

    default:
      return newState;
  }
};

export default adminOrders;
