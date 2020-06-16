import { ADD_CART, ORDER_DEC, DEC_CART_ORDER, DELETE_ORDER, REMOVE_ORDER, ADMIN_ORDERS, DELETE_BOOK, UPDATE_BOOK, ADD_BOOK, MY_ORDER } from "../Types/cart"
import { dispatch } from "../Store/Store"


export const addToCart = (data) =>{
    return {
        type: ADD_CART,
        payload: data
    }
}

export const setOrder = (index) =>{
    return {
        type: ORDER_DEC,
        payload: index
    }
}

export const decCart = (data) =>{
    return {
        type: DEC_CART_ORDER,
        payload: data
    }
}

export const deleteOrder = (data) =>{
    return {
        type: DELETE_ORDER,
        payload: data
    }
}

export const order = (data, index) => {
    return (dispatch) => {
        dispatch(addToCart(data));
        dispatch(setOrder(index))
    }
}

export const removeAllOrders = ()=>{
    return {
        type :REMOVE_ORDER,
        payload: null
    }
}

export const adminOrdersAction = (data) => {
    return {
        type : ADMIN_ORDERS,
        payload: data
    }
}

export const deleteBookAction = (index) =>{
    return {
        type : DELETE_BOOK,
        payload: index
    }
}

export const updateBookAction = (index, data) =>{
    return {
        type: UPDATE_BOOK,
        index:index,
        payload: data
    }
}

export const addBookAction = (data) => {
    return {
        type: ADD_BOOK,
        payload: data
    }
}

export const updateAdminOrderAction = (data, index) => {
    return {
        type: UPDATE_BOOK,
        payload: data,
        index: index
    }
}

export const myOrderAction = (data) => {
    return {
        type: MY_ORDER,
        payload: data,
    }
}