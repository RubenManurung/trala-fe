import { KELAS_DATA, DETAIL_KELAS } from "../types";
import { kelasAPI } from "services/kelas";

const getKelas = () => {
  return async (dispatch) => {
    const response = await kelasAPI();
    dispatch({
      type: KELAS_DATA,
      payload: response.data,
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
