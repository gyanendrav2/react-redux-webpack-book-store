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
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { updateAdminOrderAction } from "../Redux/Actions/order";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function OrderList() {
  const classes = useStyles();
  const orders = useSelector((state: any) => state.adminOrders);
  const [status, setStatus] = useState(orders.cart);
  const dispatch = useDispatch();

const handleChange = (e, i) => {
  let newState = [...status];
  newState[i].status = e.target.value;
  setStatus([...newState]);
  console.log(status)
dispatch(updateAdminOrderAction(e.target.value, i));
}

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Order name</TableCell>
            <TableCell align="center">Order image</TableCell>
            <TableCell align="center">Order quantity</TableCell>
            <TableCell align="center">Order status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.cart.map((item, i) => (
            <TableRow key={item.title}>
              <TableCell align="center">{item.title}</TableCell>
              <TableCell align="center">
                <img style={{ width: 100 }} src={item.book_cover} alt="" />
              </TableCell>
              <TableCell align="center">{item.totalQuant}</TableCell>
              <TableCell align="center">
                <FormControl variant="outlined">
                  <InputLabel id="demo-simple-select-outlined-label">
                    Age
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={status[i].status}
                    onChange={(e)=>handleChange(e, i)}
                    label="Age"
                  >
                    <MenuItem value="paid">Paid</MenuItem>
                    <MenuItem value="Sent">Sent</MenuItem>
                    <MenuItem value="Canceled">Canceled</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
