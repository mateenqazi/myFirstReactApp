import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import BurgerBuilderReducer from "./store/reducers/BurgerBuilder";
import orderReducer from "./store/reducers/order";
import "./index.css";
import App from "./App";
import thunk from "redux-thunk";
import registerServiceWorker from "./registerServiceWorker";
import authReducer from "./store/reducers/auth";

// Creating the Store
const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

// combine reducer
const rootReducer = combineReducers({
  burgerBuilder: BurgerBuilderReducer,
  order: orderReducer,
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
registerServiceWorker();
