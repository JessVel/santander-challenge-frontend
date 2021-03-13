import { GET_ORDER, CREATE_ORDER, GET_ERROR } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_ORDER:
      console.log(action.payload);
      return {
        ...state,
        beerTotal: action.payload,
      };

    case GET_ERROR:
      console.log(action.payload);
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
