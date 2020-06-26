import reducer from "./auth";
import * as actionTypes from "../actions/actionTypes";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: "/",
    });
  });

  it("Should store the token upon login ", () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: "/",
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          idToken: "some-token",
          userId: "some-user-id",
        }
      )
    ).toEqual({
      token: "some-token",
      userId: "some-user-id",
      error: null,
      loading: false,
      authRedirectPath: "/",
    });
  });

  it("auth Logout Case", () => {
    expect(
      reducer(
        {
          token: "some-token",
          userId: "some-user-id",
          error: null,
          loading: false,
          authRedirectPath: "/",
        },
        { type: actionTypes.AUTH_LOGOUT }
      )
    ).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: "/",
    });
  });

  it("auth Fail Case", () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: "/",
        },
        {
          type: actionTypes.AUTH_FAIL,
          error: "something",
        }
      )
    ).toEqual({
      token: null,
      userId: null,
      error: "something",
      loading: false,
      authRedirectPath: "/",
    });
  });

  it("Auth start case ", () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: "/",
        },
        {
          type: actionTypes.AUTH_START,
        }
      )
    ).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: true,
      authRedirectPath: "/",
    });
  });

  it("Auth Success Case ", () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: "/",
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          idToken: "something",
          userId: "something1",
        }
      )
    ).toEqual({
      token: "something",
      userId: "something1",
      error: null,
      loading: false,
      authRedirectPath: "/",
    });
  });
});
