import React, { useState, useEffect } from "react";
import { Typography, Avatar, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import "./style.css";
import { addToCart, decCart, deleteOrder } from "../Redux/Actions/order";
import { DeleteForever } from "@material-ui/icons";
import { useHistory, useRouteMatch } from "react-router-dom";


const MyOrders = () => {
  const { cart } = useSelector((state: any) => state.myOrders); 
  const route = useHistory();

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
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
