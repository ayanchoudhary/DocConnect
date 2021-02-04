import { SET_USER } from "constants/action-types";

const initialState = {
  email: "",
  client: false,
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        email: action.payload.email,
        client: action.payload.client,
      };
    default:
      return state;
  }
}
