import React, { memo, FunctionComponent } from "react";
import {
  Typography,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  Select,
  FormControl,
  Button,
  Box,
  MenuItem,
} from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { countryList } from "../utility/countrys";
import { useHistory } from "react-router-dom";
import { removeAllOrders, adminOrdersAction, myOrderAction } from "../Redux/Actions/order";

const Payment: FunctionComponent = () => {
  const [value, setValue] = React.useState("debit");
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const route = useHistory();
  const orders = useSelector((state:any)=>state.orderReducer)
  const handlePayment = () => {
    dispatch(adminOrdersAction(orders.cart));
    dispatch(myOrderAction(orders.cart));
    setTimeout(()=>{
    alert("Payment Success");
    setTimeout(()=>{
      route.push("/dashboard");
    },1000)
      dispatch(removeAllOrders());
    },1000);
  }

  return (
    <div className="payment">
      <Box>
        <Typography varient="h5" color="primary">
          Payment Mode
        </Typography>
        <RadioGroup
          className="radio__row"
          aria-label="payment"
          name="payment"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            value="debit"
            control={<Radio color="primary" />}
            label="Debit card"
          />
          <FormControlLabel
            value="credit"
            control={<Radio color="primary" />}
            label="Credit Card"
          />
          <FormControlLabel
            value="paypal"
            control={<Radio color="primary" />}
            label="PayPal"
          />
        </RadioGroup>
      </Box>
      <Box mb={2}>
        <Typography varient="h5" color="primary">
          Card Information
        </Typography>
        <TextField
          placeholder="Enter card number"
          variant="outlined"
          fullWidth
        />
        <Box className="flex-row">
          <TextField placeholder="MM/YY" variant="outlined" fullWidth />
          <TextField placeholder="CVC" variant="outlined" fullWidth />
        </Box>
      </Box>
      <Box mb={2} fullWidth>
        <Typography varient="h5" color="primary">
          Name On Card
        </Typography>
        <TextField label="" variant="outlined" fullWidth />
      </Box>
      <Box mb={2} fullWidth>
        <Typography varient="h5" color="primary">
          Country
        </Typography>
        <FormControl variant="outlined" fullWidth>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined-label"
            fullWidth
          >
            {countryList.map((ans) => (
              <MenuItem key={ans} value={ans}>
                {ans}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box fullWidth display="flex" alignItems="center" justifyContent="center">
        <Button  variant="contained" onClick={handlePayment} color="primary">
          Confirm
        </Button>
      </Box>
    </div>
  );
};

export default memo(Payment);
