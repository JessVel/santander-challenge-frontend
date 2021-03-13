import { EDIT_MEET, GET_MEET, DELETE_MEET, CREATE_MEET, SELECTED_MEET } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case CREATE_MEET:
      console.log(action.payload);
      return {
        ...state,
        meets: [action.payload, ...state.meets],
      };
    case DELETE_MEET:
      console.log(action.payload);
      return {
        ...state,
        meets: state.meets.filter(meet => meet._id !== action.payload),
        meetId: null,
      };
    case EDIT_MEET:
      return {
        ...state,
        meets: state.meets.map(meet => (meet._id === action.payload._id ? action.payload : meet)),
      };
    case GET_MEET:
      return {
        ...state,
        meets: action.payload,
      };
    case SELECTED_MEET:
      console.log(action.payload);
      return {
        ...state,
        meetId: state.meets.filter(item => item._id === action.payload),
      };
    default:
      return state;
  }
};
