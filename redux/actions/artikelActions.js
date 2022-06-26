import axios from "axios";
import { API } from "../../config";
import { ARTIKEL_DATA } from "../types";

const getArtikel = () => {
  return async (dispatch) => {
    const path = "Testing/Article";
    await axios
      .get(`${API}/${path}`, {
        headers: {
          Authorization: "Basic dHJpYWxxdWJpc2E6dHJpYWxxdWJpc2FrYW5kaWRhdA==",
        },
      })
      .then((res) => {
        dispatch({
          type: ARTIKEL_DATA,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log("ERROR", error);
        alert(error);
      });
  };
};

export default {
  getArtikel,
};
