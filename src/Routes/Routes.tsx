import React, {lazy, Suspense} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
const BookLIst  = lazy(() => import("../Components/BookLIst"));
const Checkout = lazy(() => import("../Components/Checkout"));
const Payment = lazy(() => import("../Components/Payment"));
const OrderList = lazy(() => import("../Components/OrderList"));
const BookStore = lazy(() => import("../Components/BookStore"));
const AddBook = lazy(() => import("../Components/AddBook"));
const MyOrders = lazy(() => import("../Components/MyOrders"));
const UserList = lazy(() => import("../Components/UserList"));




const App: React.FunctionComponent = () => {
  const { url, path } = useRouteMatch();
  return (
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
      <Route exact path={`${url}`} component={BookLIst} />
      <Route exact path={`${url}/Users`} component={UserList} />
      <Route exact path={`${url}/checkout`} component={Checkout} />
      <Route exact path={`${url}/pay`} component={Payment} />
      <Route exact path={`${url}/orders`} component={OrderList} />
      <Route exact path={`${url}/Books`} component={BookStore} />
      <Route exact path={`${url}/add-book`} component={AddBook} />
      <Route exact path={`${url}/my-orders`} component={MyOrders} />
      </Suspense>
    </Switch>
  );
};

export default React.memo(App);
