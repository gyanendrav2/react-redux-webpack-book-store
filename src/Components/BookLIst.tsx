import * as React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { booklist } from "../utility/books";
import { ShoppingCart } from "@material-ui/icons";
import { Typography, Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { order } from "../Redux/Actions/order";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
    text: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    iconsMargin: {
      marginLeft: 10,
    },
  })
);

const BookLIst: React.FunctionComponent = () => {
  const classes = useStyles();
  const books = useSelector((state: any) => state.bookReducer);
  const state = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const handleOrder = (i) => {
    dispatch(order(books.cart[i], i));
  }

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        {books.cart.map((book: any, i: number) => (
          <Grid key={i} item xs={12} sm={3}>
            <Paper className={classes.paper}>
              <img style={{ width: "100%" }} src={book.book_cover} />
              <Typography variant="h6" color="primary" className={classes.text}>
                {book.title}
              </Typography>
              <Typography color="primary" className={classes.text}>
                by: {book.author}
              </Typography>
              <Button variant="contained" onClick={()=>{handleOrder(i)}} color="primary" fullWidth>
                Add to cart <ShoppingCart className={classes.iconsMargin} />
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BookLIst;
