import React, { useContext, useEffect } from "react";
import meetContext from "../../../context/Meet/meetContext";
import authContext from "../../../context/auth/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import "./styles/cardmeet.css";

const CardMeet = ({ meet }) => {
  const { meets, deleteMeet, editMeet } = useContext(meetContext);
  const { admin } = useContext(authContext);

  let color;
  let listColor = ["pink", "blue", "yellow", "violet", "orange"];

  const randomColor = () => {
    color = listColor[Math.floor(Math.random() * listColor.length)];
  };

  randomColor();

  // confirmar asistencia
  const changeAssistance = meet => {
    if (meet.asistance === true) {
      meet.asistance = false;
    } else {
      meet.asistance = true;
    }
    editMeet(meet);
  };

  return (
    <>
      <li className={`meet ${color} shadow`}>
        <div>
          {meet.asistance === true ? (
            <button type="button" className="complete btn-assistance" onClick={() => changeAssistance(meet)}>
              Attend
            </button>
          ) : (
            <button type="button" className="incomplete btn-assistance" onClick={() => changeAssistance(meet)}>
              No attend
            </button>
          )}
        </div>
        <div className="actions">
          <h3>{meet.name}</h3>
          <small>{moment(meet.date).format("L")}</small>
          {admin === "T" ? (
            <div className="action-btn">
              {" "}
              <button type="button" className="btn-edit" onClick={() => editMeet(meet)}>
                <FontAwesomeIcon icon={faEdit} />
              </button>
              <button type="button" className="btn-delete" onClick={() => deleteMeet(meet._id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ) : null}
        </div>
      </li>
    </>
  );
};

export default CardMeet;
