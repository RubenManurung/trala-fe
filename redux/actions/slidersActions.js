import { slidersAPI } from "services/sliders";
import { SLIDERS_DATA } from "../types";

const getSliders = () => {
  return async (dispatch) => {
    const response = await slidersAPI();
    dispatch({
      type: SLIDERS_DATA,
      payload: response.data,
    });
  };
};

export default {
  getSliders,
};
