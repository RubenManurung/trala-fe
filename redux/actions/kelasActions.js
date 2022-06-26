import axios from "axios";
import { API } from "../../config";
import { KELAS_DATA, DETAIL_KELAS } from "../types";

const getKelas = () => {
  return async (dispatch) => {
    const path = "Testing/content";
    await axios
      .get(`${API}/${path}`, {
        headers: {
          Authorization: "Basic dHJpYWxxdWJpc2E6dHJpYWxxdWJpc2FrYW5kaWRhdA==",
        },
      })
      .then((res) => {
        dispatch({
          type: KELAS_DATA,
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log("ERROR", error);
        alert(error);
      });
  };
};

const getDetails = (data) => {
  return async (dispatch) => {
    dispatch({ type: DETAIL_KELAS, payload: data });
  };
};

export default {
  getKelas,
  getDetails,
};
