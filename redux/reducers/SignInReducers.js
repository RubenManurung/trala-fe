import { SIGNIN_DATA, DEAUTHENTICATE, AUTHENTICATE } from "../types";

const initialState = {
  data: [],
  token: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_DATA:
      return { ...state, data: action.payload };
    case AUTHENTICATE:
      return { ...state, token: action.payload };
    case DEAUTHENTICATE:
      return { initialState: null };
    default:
      return state;
  }
}
