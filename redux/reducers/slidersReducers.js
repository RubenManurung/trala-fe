import { SLIDERS_DATA } from "../types";

const initialState = {
  data: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SLIDERS_DATA:
      return { ...state, data: action.payload };

    default:
      return state;
  }
}
