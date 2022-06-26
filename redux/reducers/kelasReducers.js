import { KELAS_DATA, DETAIL_KELAS } from "../types";

const initialState = {
  data: [],
  detailKelas: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case KELAS_DATA:
      return { ...state, data: action.payload };
    case DETAIL_KELAS:
      return { ...state, detailKelas: action.payload };

    default:
      return state;
  }
}
