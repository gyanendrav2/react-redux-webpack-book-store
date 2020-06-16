import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import userReducer from "./userReducer";
import userLoginReducer from "./userLoginReducer";
import orderReducer from "./orderReducer";
import adminOrders from "./adminOrders";
import myOrders from "./myOrders";






export const RootReducer = combineReducers({
    bookReducer,
    userReducer,
    userLoginReducer,
    orderReducer,
    adminOrders,
    myOrders
});
