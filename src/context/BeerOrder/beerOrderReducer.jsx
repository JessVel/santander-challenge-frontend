import { GET_ORDER, CREATE_ORDER, GET_ERROR } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_ORDER:
      return {
        ...state,
        beerTotal: action.payload,
      };

    case GET_ERROR:
      return {
        ...state,
        beerTotal: null,
        beerOrder: [],
      };

    case CREATE_ORDER:
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
};
