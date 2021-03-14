import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const PrivateRoute = ({ component: Component, ...props }) => {
  const { authentication, authenticUser, loading } = useContext(AuthContext);

  useEffect(() => {
    authenticUser();
    // eslint-disable-next-line
  }, []);

  return <Route {...props} render={props => (!authentication && !loading ? <Redirect to="/" /> : <Component {...props} />)} />;
};

export default PrivateRoute;
