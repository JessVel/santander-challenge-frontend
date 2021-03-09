import React from "react";
import Beer from "../Animation/Beer/Beer";
import "./styles/welcome.css";

const Welcome = ({ history }) => {
  function handleOnClick() {
    history.push("/login");
  }
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
