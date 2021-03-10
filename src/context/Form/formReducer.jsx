import { SHOW_FORM, HIDE_FORM } from "../../types";

export default (state, action) => {
    switch (action.type) {
      case SHOW_FORM:
        return {
          ...state,
          form: true,
        };

        case HIDE_FORM:
            return{
                ...state,
                form:false
            }
      default:
        return state;
    }
  };