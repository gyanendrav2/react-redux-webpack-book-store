import React, { useState, useEffect } from "react";
import { Typography, Avatar, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { addToCart, decCart, deleteOrder } from "../Redux/Actions/order";
import { DeleteForever } from "@material-ui/icons";
import { useHistory, useRouteMatch } from "react-router-dom";


const Checkout = () => {
  const { cart } = useSelector((state: any) => state.orderReducer);
  const [uBook, setuBook] = useState([]);
  console.log(cart);
 
  const route = useHistory();

  const dispatch = useDispatch();
  const increaseOrder = (book) => {
    dispatch(addToCart(book));
  };

  const decreaseOrder = (book) => {
    dispatch(decCart(book));
  };

  const deleteHandler = (book) => {
    dispatch(deleteOrder(book));
  };

  const HandlePay = () =>{
   route.push(`/dashboard/pay`);
  }

  return (
    <div>
      {cart.map((book) => (
        <div key={book.title} className="book-checkout">
          <img src={book.book_cover} alt="" />
          <div className="book-info">
            <div className="book-name">
              <Typography variant="h6">{book.title}</Typography>
              <Typography>{book.author}</Typography>
            </div>
            <div className="quantity">
              <Avatar variant="rounded">
                <Typography variant="h6">{book.totalQuant}</Typography>
              </Avatar>
              <Button
                variant="contained"
                onClick={() => {
                  increaseOrder(book);
                }}
                color="primary"
              >
                +
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  decreaseOrder(book);
                }}
                color="secondary"
              >
                -
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  deleteHandler(book);
                }}
                color="secondary"
              >
                <DeleteForever />
              </Button>
            </div>
          </div>
        </div>
      ))}
      <Button variant="contained" color="primary" onClick={HandlePay} fullWidth>Pay</Button>
    </div>
  );
};

export default Checkout;
