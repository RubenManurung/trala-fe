import { ARTIKEL_DATA } from "../types";

const initialState = {
  data: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ARTIKEL_DATA:
      return { ...state, data: action.payload };

    default:
      return state;
  }
}
