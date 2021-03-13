import { GET_TEMP, DATE_TEMP, DATE_ERROR } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case GET_TEMP:
      return {
        ...state,
        tempForecast: action.payload,
      };

    case DATE_TEMP:
      console.log(action.payload);
      return {
        ...state,
        tempDay: action.payload,
      };
    case DATE_ERROR:
      return {
        ...state,
        tempDay: null,
        tempForecast: null,
      };

    default:
      return state;
  }
};
