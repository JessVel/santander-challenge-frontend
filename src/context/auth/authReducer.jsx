import { REGISTER_SUCESS, REGISTER_ERROR, GET_USER, LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case REGISTER_SUCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      console.log(action.payload.token);
      return {
        ...state,
        authentication: true,
        message: null,
        user: action.payload,
        loading: false,
      };
    case GET_USER:
      return {
        ...state,
        authentication: true,
        user: action.payload,
        loading: false,
        admin: action.payload.userData.is_admin,
      };
    case REGISTER_ERROR:
    case LOGIN_ERROR:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        admin: null,
        authentication: null,
        loading: false,
      };

    case LOG_OUT:
      console.log("cerrando sesion");
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        admin: null,
        authentication: null,
        loading: false,
      };
    default:
      return state;
  }
};
