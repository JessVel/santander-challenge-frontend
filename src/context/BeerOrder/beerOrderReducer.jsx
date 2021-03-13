import { GET_ORDER, CREATE_ORDER } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_ORDER:
      return {
        ...state,
        form: true,
      };

    case CREATE_ORDER:
      return {
        ...state,
        form: false,
      };
    default:
      return state;
  }
};
