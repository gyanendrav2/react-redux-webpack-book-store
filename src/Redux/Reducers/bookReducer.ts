
import { booklist } from "../../utility/books";
import { ORDER_DEC, DELETE_BOOK, UPDATE_BOOK, ADD_BOOK } from "../Types/cart";


const initialState = {
    cart:[...booklist]
}
const bookReducer = (state = initialState, action:any) =>{
    let newState = {...state};
    switch(action.type){
        case ORDER_DEC:{
            newState.cart[action.payload].quantity = newState.cart[action.payload].quantity -1;
            return newState;
        }
        case DELETE_BOOK:{
            newState.cart.splice(action.payload, 1);
            return newState;
        }

        case UPDATE_BOOK:{
            newState.cart.splice(action.index, 1, action.payload);
            return newState;
        }
        case ADD_BOOK:{
            newState.cart.push(action.payload);
            return newState;
        }
        default:
            return newState;
    }
}

export default bookReducer;