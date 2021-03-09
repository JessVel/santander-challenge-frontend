import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/auth.css";

const SingIn = props => {
  // State para iniciar sesion
  const [usuario, setUsuario] = useState({
    user: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
    es_admin: "F",
    confirm: "",
    token: "",
  });

  // Extraer datos de usuario
  const { user, name, lastname, email, password, confirm } = usuario;

  const onChange = e => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  //iniciar sesion
  //   const onSubmit = e => {
  //     e.preventDefault();

  //     if (user.trim() === "" || name.trim() === "" || lastname.trim() === "" || email.trim() === "" || password.trim() === "" || confirm.trim() === "") {
  //       showAlert("Todos los campos son obligatios", "alerta-error");
  //       return;
  //     }

  //     if (password.length < 6) {
  //       showAlert("La contraseña debe tener al menos 6 caracteres", "alerta-error");
  //       return;
  //     }

  //     if (password.length === 6 && confirm.length === 6 && password !== confirm) {
  //       showAlert("Las contraseñas deben ser iguales", "alerta-error");
  //       return;
  //     }

  //     registerUser({ user, name, lastname, email, password });
  //   };

  return (
    <>
      <div className="form-usuario reverse">
        <div className="contenedor-form sombra-dark">
          <h1 className="singin-titulo">Get account</h1>
          {/* <form onSubmit={onSubmit}> */}
          <form>
            <div className="campo-form">
              <label htmlFor="user">User</label>
              {/* <input className="input-focus" type="text" id="user" name="user" placeholder="Ingresa tu usuario" value={user} onChange={onChange} /> */}
              <input className="input-focus" type="text" id="user" name="user" placeholder="Enter your user" />
            </div>

            <div className="campo-form">
              <label htmlFor="password">E-mail</label>
              {/* <input className="input-focus" type="email" id="email" name="email" placeholder="Ingresa tu e-mail" value={email} onChange={onChange} /> */}
              <input className="input-focus" type="email" id="email" name="email" placeholder="Enter your e-mail" />
            </div>

            <div className="campo-form">
              <label htmlFor="password">Password</label>
              {/* <input className="input-focus" type="password" id="password" name="password" placeholder="Ingresa tu contraseña" value={password} onChange={onChange} /> */}
              <input className="input-focus" type="password" id="password" name="password" placeholder="Enter your password" />
            </div>

            <div className="campo-form">
              <label htmlFor="confirmar">Confirm password</label>
              {/* <input className="input-focus" type="password" id="confirmar" name="confirm" placeholder="Confirma tu contraseña" value={confirm} onChange={onChange} /> */}
              <input className="input-focus" type="password" name="confirm" placeholder="Repeat password" />
            </div>

            <div className="campo-form">
              {/* <input type="submit" className="btn btn-primario btn-block" value="Registrarme" onClick={handleChange} /> */}
              <input type="submit" className="btn btn-primario btn-block" value="Registrarme" />
            </div>
          </form>

          <Link to={"/"} className="enlace-cuenta">
            Get back
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingIn;
