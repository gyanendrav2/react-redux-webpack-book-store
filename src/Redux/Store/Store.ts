import { createStore, compose, applyMiddleware } from "redux";
import { RootReducer } from "../Reducers/index";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, RootReducer);

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const Store =
  window.location.hostname === "localhost" ||
  window.location.hostname.match(
    /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
  )
    ? createStore(
        persistedReducer,
        compose(
          applyMiddleware(thunk)
        )
      )
    : createStore(persistedReducer, compose(applyMiddleware(thunk)));

let persistor = persistStore(Store);
const dispatch = Store.dispatch;

export { Store, dispatch, persistor };
