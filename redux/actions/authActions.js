import { SIGNIN_DATA, AUTHENTICATE, DEAUTHENTICATE } from "../types";
import { setCookie, removeCookie, getCookie } from "../../utils/cookie";
import Router from "next/router";
import { loginAPI } from "services/auth";

const SignIn = ({ username, password, deviceID }) => {
  return async (dispatch) => {
    const response = await loginAPI({ username, password, deviceID });
    console.log("RESPONSE LOGIN", response);
    setCookie("token", response.data.accessToken.token);
    dispatch({
      type: SIGNIN_DATA,
      payload: response.data,
    });
  };
};

export const deauthenticate = () => {
  return (dispatch) => {
    removeCookie("token");
    localStorage.clear();
    dispatch({ type: DEAUTHENTICATE });
    Router.reload(window.location.pathname);
  };
};

const reauthenticate = (token) => {
  return (dispatch) => {
    dispatch({ type: AUTHENTICATE, payload: token });
    Router.reload(window.location.pathname);
  };
};

export default {
  SignIn,
  reauthenticate,
  deauthenticate,
};
