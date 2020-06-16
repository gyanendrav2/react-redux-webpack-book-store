import React, { useState, useEffect } from "react";
import { Typography, TextField, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { updateBookAction } from "../Redux/Actions/order";

interface props {
  data: any,
  handler: Function
}

const EditBook: React.FunctionComponent<props> = ({ data, handler }) => {
  const [state, setState] = useState({
    bookname: "",
    bookimg: "",
    bookauthor: "",
  });
  useEffect(() => {
    setState({
      bookname: data.item.title,
      bookimg: data.item.book_cover,
      bookauthor: data.item.author,
    });
  }, [data]);

  const handleName = (e) => {
    setState({ ...state, bookname: e.target.value });
  };

  const handleImg = (e) => {
    setState({ ...state, bookimg: e.target.value });
  };

  const handleAuthor = (e) => {
    setState({ ...state, bookauthor: e.target.value });
  };

  const dispatch = useDispatch();

  const handleSave = (e) => {
    const obj = {
      id: 0,
      title: state.bookname,
      author: state.bookauthor,
      book_cover: state.bookimg,
      published_date: "30/04/2020",
      quantity: 10,
    };
    dispatch(updateBookAction(data.index, obj));
    handler();
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

export default EditBook;
