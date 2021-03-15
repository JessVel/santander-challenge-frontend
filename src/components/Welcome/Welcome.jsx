import React, { useContext, useEffect } from "react";
import Beer from "../Animation/Beer/Beer";
import { useTranslation } from "react-i18next";
// import authContext from "../../context/auth/authContext";
import "./styles/welcome.css";

const Welcome = ({ history }) => {
  function handleOnClick() {
    history.push("/login");
  }

  const { t } = useTranslation();
  // const { user, admin, logOut, token, authenticUser } = useContext(authContext);

  // useEffect(() => {
  //   authenticUser();
  // }, []);
  return (
    <>
      <main className="container-flex">
        <section className="section-anim">
          <Beer />
        </section>
        <section className="section-start">
          <h3 className="title-secondary">{t("welcome.title")}</h3>
          <small>{t("welcome.small")}</small>

          <button className="btn" onClick={handleOnClick}>
            {t("welcome.start")}
          </button>
        </section>
      </main>
    </>
  );
};

export default Welcome;
