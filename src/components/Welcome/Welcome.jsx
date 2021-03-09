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
        <h1 className="title">Welcome!</h1>
        <Beer />
        <section className="section">
          <h3 className="title-secondary">Beer calendar</h3>
          <p>Here you can see all your beer meetings</p>

          <button className="btn" onClick={handleOnClick}>
            Get started!
          </button>
        </section>
      </main>
    </>
  );
};

export default Welcome;
