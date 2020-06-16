import React, { useState, useEffect } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { updateBookAction, addBookAction } from "../Redux/Actions/order";
import { useHistory } from "react-router-dom";

interface props {
  data: any,
  handler: Function
}

const AddBook: React.FunctionComponent<props> = () => {
  const [state, setState] = useState({
    bookname: "",
    bookimg: "",
    bookauthor: "",
    publishDate:"",
    quantity:""
  });

  const handleName = (e) => {
    setState({ ...state, bookname: e.target.value });
  };

  const handleImg = (e) => {
    setState({ ...state, bookimg: e.target.value });
  };

  const handleAuthor = (e) => {
    setState({ ...state, bookauthor: e.target.value });
  };

  const handlePublish = (e) => {
    setState({ ...state, publishDate: e.target.value });
  }

  const handleQuantity = (e) => {
    setState({ ...state, quantity: e.target.value });
  }
  
  const dispatch = useDispatch();
  const route = useHistory();

  const handleSave = (e) => {
    const obj = {
      id: 0,
      title: state.bookname,
      author: state.bookauthor,
      book_cover: state.bookimg,
      published_date: "30/04/2020",
      quantity: state.quantity,
    };
    dispatch(addBookAction(obj));
    route.push("/dashboard/books")
  };

  return (
    <div className="edit-books">
      <div className="box-container">
        <Typography variant="h5">Book Title</Typography>
        <TextField
          label="book name"
          value={state.bookname}
          onChange={handleName}
          variant="outlined"
          fullWidth
        />
      </div>

      <div className="box-container">
        <Typography variant="h5">Book Cover</Typography>
        <TextField
          label="book image"
          value={state.bookimg}
          onChange={handleImg}
          variant="outlined"
          fullWidth
        />
      </div>

      <div className="box-container">
        <Typography variant="h5">Book aurthor</Typography>
        <TextField
          label="book author"
          value={state.bookauthor}
          onChange={handleAuthor}
          variant="outlined"
          fullWidth
        />
      </div>

      <div className="box-container">
        <Typography variant="h5">Book publish date</Typography>
        <TextField
          label="book author"
          value={state.publishDate}
          onChange={handlePublish}
          variant="outlined"
          fullWidth
        />
      </div>

      <div className="box-container">
        <Typography variant="h5">Book quantity</Typography>
        <TextField
          label="book author"
          value={state.quantity}
          onChange={handleQuantity}
          variant="outlined"
          fullWidth
        />
      </div>
      {/* <div className="box-container">
        <Typography variant="h5">Book quantity</Typography>
        <TextField label="book quantity" variant="outlined" fullWidth />
      </div> */}
      <Button
        variant="contained"
        style={{ marginBottom: 10 }}
        color="primary"
        onClick={handleSave}
        fullWidth
      >
        Save
      </Button>
      <Button variant="contained" color="primary" fullWidth>
        Cancel
      </Button>
    </div>
  );
};

export default AddBook;
