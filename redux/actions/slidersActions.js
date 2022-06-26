import axios from "axios";
import { API } from "../../config";
import { SLIDERS_DATA } from "../types";

const getSliders = () => {
  return async (dispatch) => {
    const path = "Testing/slide/v2";
    await axios
      .get(`${API}/${path}`, {
        headers: {
          Authorization: "Basic dHJpYWxxdWJpc2E6dHJpYWxxdWJpc2FrYW5kaWRhdA==",
        },
      })
      .then((res) => {
        dispatch({
          type: SLIDERS_DATA,
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
  getSliders,
};
