import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Beer from '../Animation/Beer/Beer'
import AuthContext from '../../context/auth/authContext';
import Swal from "sweetalert2";
import "./styles/auth.css";

const SingIn = ({history}) => {

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
        showAlert("Todos los campos son obligatios", "alerta-error");
        return;
      }

      if (password.length < 6) {
        showAlert("La contraseña debe tener al menos 6 caracteres", "alerta-error");
        return;
      }

      if (password.length === 6 && confirm.length === 6 && password !== confirm) {
        showAlert("Las contraseñas deben ser iguales", "alerta-error");
        return;
      }

      registerUser( {user, email, password} );
    };

  return (
    <>
      <div className="form-usuario reverse">
      <Beer />
        <div className="contenedor-form sombra-dark">
          <h1 className="singin-titulo">Get account</h1>
          
          <form onSubmit={onSubmit}>
            <div className="campo-form">
              <label htmlFor="user">User</label>
              <input className="input-focus" type="text" id="user" name="user" placeholder="Enter your user" value={user} onChange={onChange} />
            </div>

            <div className="campo-form">
              <label htmlFor="email">E-mail</label>
              <input className="input-focus" type="email" id="email" name="email" placeholder="Enter your e-mail" value={email} onChange={onChange} />
            </div>

            <div className="campo-form">
              <label htmlFor="password">Password</label>
              <input className="input-focus" type="password" id="password" name="password" placeholder="Enter your password" value={password} onChange={onChange} />
            </div>

            <div className="campo-form">
              <label htmlFor="confirmar">Confirm password</label>
              <input className="input-focus" type="password" id="confirmar" name="confirm" placeholder="Repeat your password" value={confirm} onChange={onChange} />
            </div>

            <div className="campo-form">
              <input type="submit" className="btn btn-primario btn-block" value="Sing in"/>
            </div>
          </form>

          <Link to={"/login"} className="enlace-cuenta">
            Get back
          </Link>
        </div>
      </div>
    </>
  );
};

export default SingIn;
