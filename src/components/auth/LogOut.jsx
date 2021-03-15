import React, { useContext, useEffect } from "react";
import authContext from "../../context/auth/authContext";

const LogOut = () => {
  const { logOut, user, authenticUser } = useContext(authContext);

  // useEffect(() => {
  //   authenticUser();
  // }, []);

  return (
    <footer className="log-out">
      <button className="btn-logout" onClick={() => logOut()}>
        Log out
      </button>
    </footer>
  );
};

export default LogOut;
