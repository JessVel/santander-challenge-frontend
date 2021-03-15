import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const PrivateRoute = ({ component: Component, ...props }) => {
  const { authentication, authenticUser, token } = useContext(AuthContext);

  useEffect(() => {
    authenticUser();
    // eslint-disable-next-line
  }, []);

  return <Route {...props} render={props => (!authentication ? <Redirect to="/" /> : <Component {...props} />)} />;
};

export default PrivateRoute;
