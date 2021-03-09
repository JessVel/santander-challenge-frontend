import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/auth.css";

const LogIn = props => {
  // State para iniciar sesion
  const [userValues, setUserValues] = useState({
    user: "",
    password: "",
  });

  // Extraer datos de usuario
  const { user, password } = userValues;

  const onChange = e => {
    setUserValues({
      ...userValues,
      [e.target.name]: e.target.value,
    });
  };

  //iniciar sesion
  //   const onSubmit = e => {
  //     e.preventDefault();

  //     if (user.trim() === "" || password.trim() === "") {
  //       showAlert("Todos los campos son obligatorios", "alerta-error");
  //       return;
  //     }

  //     logInUser({ user, password });
  //   };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Log in</h1>
        {/* <form onSubmit={onSubmit}> */}
        <form>
          <div className="campo-form">
            <label htmlFor="user">User</label>
            <input className="input-focus" type="user" id="user" name="user" placeholder="Enter your user" value={user} onChange={onChange} />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            {/* <input className="input-focus" type="password" id="password" name="password" placeholder="Ingresa tu contraseña" value={password} onChange={onChange} /> */}
            <input className="input-focus" type="password" id="password" name="password" placeholder="Enter your password" />
          </div>
          <div className="campo-form">
            <input type="submit" className="btn btn-primario btn-block" value="Iniciar sesión" />
          </div>
        </form>
        <p>Don't have an account?</p>
        <Link to={"/singin"} className="enlace-cuenta">
          Get account
        </Link>
      </div>
    </div>
  );
};

export default LogIn;
