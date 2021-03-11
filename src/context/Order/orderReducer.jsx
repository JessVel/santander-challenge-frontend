import { GET_ORDER } from "../../types";

export default (state, action) => {
    switch (action.type) {
      case GET_ORDER:
        console.log(action.payload)
        return {
          ...state,
          order: [action.payload, ...state.order],
        };
      default:
        return state;
    }
  };
