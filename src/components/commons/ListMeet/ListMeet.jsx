import React, { useContext, useEffect, useState } from "react";
import CardMeet from "../CardMeet/CardMeet";
import Form from "../Form/Form";
import meetContext from "../../../context/Meet/meetContext";
import authContext from "../../../context/auth/authContext";
import formContect from "../../../context/Form/formContext";
import UfoAnimation from "../../Animation/Ufo/Ufo";
import "./styles/listmeet.css";

const ListMeet = () => {
  const { meets, getMeet, selectedMeet } = useContext(meetContext);
  const { admin, authenticUser, user } = useContext(authContext);
  const { form, showForm } = useContext(formContect);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    authenticUser();
    getMeet();

    setLoading(false);
  }, []);

  const selected = id => {
    selectedMeet(id);
  };

  return (
    <>
      <div className="meet-flex">
        <h4 className="meets-title">My beer meetings!</h4>
        {/* {user ? <span className="user">Hello, {user.userData.user}!👋🤩</span> : null} */}
        {admin === "T" && !form ? (
          <button
            type="button"
            className="create-meet"
            onClick={() => {
              showForm();
            }}
          >
            Create meet
          </button>
        ) : null}

        {form ? <Form /> : null}
      </div>
      <div className="list-container">
        {meets.length === 0 ? (
          <h3 className="list-title">There's no meetings...</h3>
        ) : (
          <ul className="list-meet">
            {meets.map(meet => (
              <CardMeet
                key={meet._id}
                meet={meet}
                onClick={() => {
                  selected(meet._id);
                }}
              />
            ))}
          </ul>
        )}

        {meets.length === 0 ? (
          <section className="section-flex">
            {" "}
            <UfoAnimation />
          </section>
        ) : null}
      </div>
    </>
  );
};

export default ListMeet;
