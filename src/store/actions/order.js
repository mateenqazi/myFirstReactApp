import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";
export const purhaseBurgerSuccess = (id, orderData) => {
  return {
    type: actionTypes.PURCHASE_BURGER_SUCCESS,
    orderId: id,
    orderData: orderData,
  };
};

export const purhaseBurgerFail = (error) => {
  return {
    type: actionTypes.PURCHASE_BURGER_FAIL,
    error: error,
  };
};

export const purhaseBurgerStart = () => {
  return {
    type: actionTypes.PURCHASE_BURGER_START,
  };
};

export const purhaseBurger = (orderData, token) => {
  return (dispatch) => {
    dispatch(purhaseBurgerStart());

    axios
      .post("/orders.json?auth=" + token, orderData)
      .then((response) => {
        dispatch(purhaseBurgerSuccess(response.data.name, orderData));
      })
      .catch((error) => {
        dispatch(purhaseBurgerFail(error));
      });
  };
};

export const purhaseInit = () => {
  return {
    type: actionTypes.PURCHASE_INIT,
  };
};

export const fetchOrdersSuccess = (orders) => {
  return {
    type: actionTypes.FETCH_ORDERS_SUCCESS,
    orders: orders,
  };
};

export const fetchOrdersFail = (error) => {
  return {
    type: actionTypes.FETCH_ORDERS_FAIL,
    error: error,
  };
};

export const fetchOrdersStart = () => {
  return {
    type: actionTypes.FETCH_ORDERS_START,
  };
};

export const fetchOrders = (token, userId) => {
  return (dispatch) => {
    dispatch(fetchOrdersStart());
    const queryparam =
      "?auth=" + token + '&orderBy="userId"&equalTo="' + userId + '"';
    axios
      .get("/orders.json" + queryparam)
      .then((res) => {
        const fetchdata = [];
        for (let key in res.data) {
          fetchdata.push({ ...res.data[key], id: key });
        }
        dispatch(fetchOrdersSuccess(fetchdata));
      })
      .catch((err) => {
        dispatch(fetchOrdersFail(err));
      });
  };
};
