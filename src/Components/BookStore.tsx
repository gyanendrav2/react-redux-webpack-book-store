import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { Edit, DeleteForever } from "@material-ui/icons";
import { deleteBookAction } from "../Redux/Actions/order";
import EditBook from "./EditBook";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
export default function BookStore() {
  const classes = useStyles();
  const books = useSelector((state: any) => state.bookReducer);
  const dispatch = useDispatch();
  const deleteBook = (index) => {
    dispatch(deleteBookAction(index));
  };

  const [state, setState] = useState({ index: -1, item: "" });
  const [hide, setHide] = useState(true);

  const handleEdit = (index, item) => {
    setState({ index, item });
    setHide(false);
  };

  const hideShowHandler = () => {
    setHide(true);
  };

  const route = useHistory();

  const handleAdder = () =>{
    route.push("/dashboard/add-book")
  }

  return (
    <>
      <Button
        style={{ float: "right", marginBottom: 20 }}
        variant="contained"
        color="primary"
        onClick={handleAdder}
      >
        Add book
      </Button>
      {hide ? (
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Book name</TableCell>
                <TableCell align="center">Book image</TableCell>
                <TableCell align="center">Book author</TableCell>
                <TableCell align="center">Book author</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {books.cart.map((item, i) => (
                <TableRow key={item.title}>
                  <TableCell align="center">{item.title}</TableCell>
                  <TableCell align="center">
                    <img style={{ width: 100 }} src={item.book_cover} alt="" />
                  </TableCell>
                  <TableCell align="center">{item.author}</TableCell>
                  <TableCell align="center">
                    <Button
                      style={{ marginRight: 10 }}
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        handleEdit(i, item);
                      }}
                    >
                      <Edit />
                    </Button>

                    <Button
                      onClick={deleteBook}
                      variant="contained"
                      color="primary"
                    >
                      <DeleteForever />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <EditBook data={state} handler={hideShowHandler} />
      )}
    </>
  );
}
