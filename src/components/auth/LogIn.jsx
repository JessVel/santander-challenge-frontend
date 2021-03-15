import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Beer from "../Animation/Beer/Beer";
import AuthContext from "../../context/auth/authContext";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import "./styles/auth.css";

const LogIn = ({ history }) => {
  const { authentication, showAlert, logInUser, message } = useContext(AuthContext);

  // State para iniciar sesion
  const [userValues, setUserValues] = useState({
    user: "",
    password: "",
  });

  // Extraer datos de usuario
  const { user, password } = userValues;

  const { t } = useTranslation();

  useEffect(() => {
    if (authentication) {
      history.push("/home");
      Swal.fire(`${t("login.swal.welcome")}`, `${t("login.miss.you")} ${user}!`, "success");
    }
    if (message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message.msg,
      });
    }
    // eslint-disable-next-line
  }, [authentication]);

  const onChange = e => {
    setUserValues({
      ...userValues,
      [e.target.name]: e.target.value,
    });
  };

  // iniciar sesion
  const onSubmit = e => {
    e.preventDefault();

    if (user.trim() === "" || password.trim() === "") {
      showAlert("Todos los campos son obligatorios", "alerta-error");
      return;
    }

    logInUser({ user, password });
  };

  return (
    <div className="form-usuario">
      <Beer />
      <div className="contenedor-form sombra-dark">
        <h1>{t("login.title")}</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="user">{t("user.label")}</label>
            <input className="input-focus" type="user" id="user" name="user" placeholder="Enter your user" value={user} onChange={onChange} />
          </div>

          <div className="campo-form">
            <label htmlFor="password">{t("password.label")}</label>
            <input className="input-focus" type="password" id="password" name="password" placeholder="Enter your password" value={password} onChange={onChange} />
          </div>
          <div className="campo-form">
            <input type="submit" className="btn btn-primario btn-block" value="Log in" />
          </div>
        </form>
        <small>{t("login.small")}</small>
        <Link to={"/singin"} className="enlace-cuenta">
          {t("login.get.account")}
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
