import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Beer from "../Animation/Beer/Beer";
import AuthContext from "../../context/auth/authContext";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import "./styles/auth.css";

const SingIn = ({ history }) => {
  const { showAlert, registerUser, authentication, message } = useContext(AuthContext);

  useEffect(() => {
    if (authentication) {
      history.push("/home");
      Swal.fire("User created successfully", "Thank you for choosing us!", "success");
    }

    if (message) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: message.msg,
      });
    }
  }, [authentication]);

  const { t } = useTranslation();

  // State para iniciar sesion
  const [usuario, setUsuario] = useState({
    user: "",
    email: "",
    password: "",
    es_admin: "F",
    confirm: "",
  });

  // Extraer datos de usuario
  const { user, email, password, confirm } = usuario;

  const onChange = e => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  // iniciar sesion
  const onSubmit = e => {
    e.preventDefault();

    if (user.trim() === "" || email.trim() === "" || password.trim() === "" || confirm.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${t("login.error")}`,
      });
      return;
    }

    if (password.length < 6) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${t("login.error.password")}`,
      });
      return;
    }

    if (password.length === 6 && confirm.length === 6 && password !== confirm) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${t("login.error.confirm")}`,
      });
      return;
    }

    registerUser({ user, email, password });
  };

  return (
    <>
      <div className="form-usuario reverse">
        <Beer />
        <div className="contenedor-form sombra-dark">
          <h1 className="singin-titulo">{t("singin.get.account")}</h1>

          <form onSubmit={onSubmit}>
            <div className="campo-form">
              <label htmlFor="user">{t("user.label")}</label>
              <input className="input-focus" type="text" id="user" name="user" placeholder={t("singin.enter.user")} value={user} onChange={onChange} />
            </div>

            <div className="campo-form">
              <label htmlFor="email">{t("email.label")}</label>
              <input className="input-focus" type="email" id="email" name="email" placeholder={t("singin.enter.email")} value={email} onChange={onChange} />
            </div>

            <div className="campo-form">
              <label htmlFor="password">{t("password.label")}</label>
              <input className="input-focus" type="password" id="password" name="password" placeholder={t("singin.enter.password")} value={password} onChange={onChange} />
            </div>

            <div className="campo-form">
              <label htmlFor="confirmar">{t("confirm.password.label")}</label>
              <input className="input-focus" type="password" id="confirmar" name="confirm" placeholder={t("singin.confirm.password")} value={confirm} onChange={onChange} />
            </div>

            <div className="campo-form">
              <input type="submit" className="btn btn-primario btn-block" value={t("singin.input")} />
            </div>
          </form>

          <Link to={"/login"} className="enlace-cuenta">
            {t("singin.back")}
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingIn;
