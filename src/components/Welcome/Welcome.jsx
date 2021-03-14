import React, { useContext, useEffect } from "react";
import Beer from "../Animation/Beer/Beer";

import authContext from "../../context/auth/authContext";
import "./styles/welcome.css";

const Welcome = ({ history }) => {
  function handleOnClick() {
    history.push("/login");
  }

  const { user, admin, authenticUser } = useContext(authContext);

  useEffect(() => {
    authenticUser();
  }, [user, admin]);
  return (
    <>
      <main className="container-flex">
        <section className="section-anim">
          <Beer />
        </section>
        <section className="section-start">
          <h3 className="title-secondary">Beer calendar</h3>
          <small>Here you can see all your beer meetings!</small>

          <button className="btn" onClick={handleOnClick}>
            Get started!
          </button>
        </section>
      </main>
    </>
  );
};

export default Welcome;
