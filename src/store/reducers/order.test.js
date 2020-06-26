import reducer from "./order";
import * as actionTypes from "../actions/actionTypes";

describe("order reducer", () => {
  it("Purchase Burger Start", () => {
    expect(
      reducer(
        {
          orders: [],
          loading: false,
          purchased: false,
        },
        { type: actionTypes.PURCHASE_BURGER_START }
      )
    ).toEqual({
      orders: [],
      loading: true,
      purchased: false,
    });
  });

  it("Purchase Burger Fail", () => {
    expect(
      reducer(
        {
          orders: [],
          loading: false,
          purchased: false,
        },
        {
          type: actionTypes.PURCHASE_BURGER_FAIL,
        }
      )
    ).toEqual({
      orders: [],
      loading: false,
      purchased: false,
    });
  });

  it("purchase INIT", () => {
    expect(
      reducer(
        {
          orders: [],
          loading: false,
          purchased: false,
        },
        { type: actionTypes.PURCHASE_INIT }
      )
    ).toEqual({
      orders: [],
      loading: false,
      purchased: false,
    });
  });

  it("fetch order  start", () => {
    expect(
      reducer(
        {
          orders: [],
          loading: false,
          purchased: false,
        },
        { type: actionTypes.FETCH_ORDERS_START }
      )
    ).toEqual({
      loading: true,
      orders: [],

      purchased: false,
    });
  });

  it("fetch Order Success", () => {
    expect(
      reducer(
        {
          orders: [],
          loading: false,
          purchased: false,
        },
        {
          type: actionTypes.FETCH_ORDERS_SUCCESS,
          orders: "array",
        }
      )
    ).toEqual({
      orders: "array",
      loading: false,
      purchased: false,
    });
  });

  it("fetch Order Fail", () => {
    expect(
      reducer(
        {
          orders: [],
          loading: false,
          purchased: false,
        },
        {
          type: actionTypes.FETCH_ORDERS_FAIL,
          error: "something",
        }
      )
    ).toEqual({
      orders: [],
      loading: false,
      purchased: false,
    });
  });
});
