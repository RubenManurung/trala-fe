import { ARTIKEL_DATA } from "../types";
import { artikelAPI } from "services/artikel";

const getArtikel = () => {
  return async (dispatch) => {
    const response = await artikelAPI();
    dispatch({
      type: ARTIKEL_DATA,
      payload: response.data,
    });
  };
};

export default {
  getArtikel,
};
