import React, { useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";
import { REGISTER_SUCESS, REGISTER_ERROR, GET_USER, LOGIN_SUCCESS, LOGIN_ERROR, LOG_OUT } from "../../types/index";

import tokenAuth from "../../config/tokenAuth";
import connection from "../../config/connection";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    authentication: null,
    user: null,
    message: null,
    cargando: true,
    admin: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const registerUser = async data => {
    try {
      const response = await connection.post("/api/user", data);
      console.log(response.data);
      dispatch({
        type: REGISTER_SUCESS,
        payload: response.data,
      });

      //Obtener el usuario
      authenticUser();
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        categoria: "alerta-error",
      };
      dispatch({
        type: REGISTER_ERROR,
        payload: alert,
      });
    }
  };

  // Retorna usuario autenticado
  const authenticUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      tokenAuth(token);
    }
    try {
      const response = await connection.get("/api/auth");

      dispatch({
        type: GET_USER,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  //Iniciar sesion
  const logInUser = async data => {
    try {
      const response = await connection.post("/api/auth", data);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });

      authenticUser();
    } catch (error) {
      const alert = {
        msg: error.response.data.msg,
        categoria: "alerta-error",
      };

      dispatch({
        type: LOGIN_ERROR,
        payload: alert,
      });
    }
  };

  const cerrarSesion = () => {
    dispatch({
      type: LOG_OUT,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        authentication: state.authentication,
        user: state.user,
        message: state.message,
        cargando: state.cargando,
        admin: state.admin,
        registerUser,
        logInUser,
        authenticUser,
        cerrarSesion,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
