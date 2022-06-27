import axios from "axios";
import { API } from "../../config";
import { SIGNIN_DATA, AUTHENTICATE, DEAUTHENTICATE } from "../types";
import { setCookie, removeCookie, getCookie } from "../../utils/cookie";
import Router from "next/router";

const SignIn = ({ username, password, deviceID }) => {
  return async (dispatch) => {
    const path = "Auth/login";
    await axios
      .post(`${API}/${path}`, {
        username,
        password,
        deviceID,
      })
      .then((res) => {
        setCookie("token", res.data.accessToken.token);
        dispatch({
          type: SIGNIN_DATA,
          payload: res.data,
        });
        alert("Berhasil Login");
        // Router.reload(window.location.pathname);
      })
      .catch((error) => {
        console.log("ERROR", error);
        const { message } = error;
        alert(message);
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
