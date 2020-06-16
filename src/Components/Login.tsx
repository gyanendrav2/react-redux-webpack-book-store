import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link, useHistory } from "react-router-dom";
import * as React from "react";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../Redux/Actions/login";

const useStyles = makeStyles((theme) => ({
  card: {
    overflow: "visible",
  },
  session: {
    position: "relative",
    zIndex: 4000,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  background: {
    backgroundColor: theme.palette.primary.main,
  },
  content: {
    padding: `40px ${theme.spacing(1)}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "1 0 auto",
    flexDirection: "column",
    minHeight: "100%",
    textAlign: "center",
  },
  wrapper: {
    flex: "none",
    maxWidth: "400px",
    width: "100%",
    margin: "0 auto",
  },
  fullWidth: {
    width: "100%",
  },
  logo: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Login: React.FunctionComponent = () => {
  const classes = useStyles();
  const routes = useHistory();
  const [state, setState] = React.useState({ email: "", password: "" });
  const dbUsers = useSelector((state:any)=>state.userReducer);
  const dispatch = useDispatch();

  const handleEmail = (e) => {
    setState({ ...state, email: e.target.value });
  };

  const handlePassword = (e) => {
    setState({ ...state, password: e.target.value });
  };

  const handleLogin = () => {
   const result =  dbUsers.users.filter(user=>{
      if(user.email===state.email && user.password===state.password){
        return true;
      }
    })

    if(result.length!=0){
      dispatch(login(result[0]));
      routes.push("/dashboard")
    }
  };

  return (
    <div className={classNames(classes.session, classes.background)}>
      <div className={classes.content}>
        <div className={classes.wrapper}>
          <Card>
            <CardContent>
                <div
                  className={classNames(classes.logo, `text-xs-center pb-xs`)}
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/static/images/logo-dark.svg`}
                    alt=""
                    className="block"
                  />
                  <Typography variant="h3">Book Store</Typography>
                  <Typography variant="caption">
                    Sign in with your app id to continue.
                  </Typography>
                </div>
                <TextField
                  id="username"
                  label="Username"
                  fullWidth
                  margin="normal"
                  onChange={handleEmail}
                />
                <TextField
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                  margin="normal"
                  onChange={handlePassword}
                />
                <FormControlLabel
                  control={<Checkbox value="checkedA" />}
                  label="Stayed logged in"
                  className={classes.fullWidth}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                  onClick={handleLogin}
                >
                  Login
                </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Login;
