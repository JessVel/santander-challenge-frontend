import { REGISTER_SUCESS, REGISTER_ERROR, GET_USER, LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT } from "../../types";

export default (state, action) => {
    switch (action.type) {
        case REGISTER_SUCESS:
        case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        authentication: true,
        message: null,
        user: action.payload,
        cargando: false,
      };
      case GET_USER:
      return {
        ...state,
        authentication: true,
        user: action.payload,
        cargando: false,
        admin: action.payload.userData.is_admin
        
        
      };
      default:
        return state;
    }
  };