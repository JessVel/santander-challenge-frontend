import React, { useContext, useEffect } from "react";
import authContext from "../../context/auth/authContext";
import { useTranslation } from "react-i18next";

const LogOut = () => {
  const { logOut, user, authenticUser } = useContext(authContext);

  // useEffect(() => {
  //   authenticUser();
  // }, []);

  const { t } = useTranslation();
  return (
    <footer className="log-out">
      <button className="btn-logout" onClick={() => logOut()}>
        {t("logout.button")}
      </button>
    </footer>
  );
};

export default LogOut;
