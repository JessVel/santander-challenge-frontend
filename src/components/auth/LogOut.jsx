import React, { useContext } from "react";
import authContext from "../../context/auth/authContext";

const LogOut = () => {
  const { logOut } = useContext(authContext);
  return (
    <footer className="log-out">
      <button className="btn-logout" onClick={() => logOut()}>
        Log out
      </button>
    </footer>
  );
};

export default LogOut;
