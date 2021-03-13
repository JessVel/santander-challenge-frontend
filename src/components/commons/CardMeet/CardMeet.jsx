import React, { useContext, useEffect } from "react";
import meetContext from "../../../context/Meet/meetContext";
import authContext from "../../../context/auth/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";
import moment from "moment";
import "./styles/cardmeet.css";

const CardMeet = ({ meet }) => {
  const { meets, deleteMeet, editMeet, meetId, getMeet } = useContext(meetContext);
  const { admin } = useContext(authContext);

  let color;
  let listColor = ["pink", "blue", "yellow", "violet", "orange"];

  const randomColor = () => {
    color = listColor[Math.floor(Math.random() * listColor.length)];
  };

  randomColor();

  useEffect(() => {
    getMeet();
  }, []);

  // confirmar asistencia
  const changeAssistance = meet => {
    if (meet.asistance === true) {
      meet.asistance = false;
    } else {
      meet.asistance = true;
    }
    editMeet(meet);
  };

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  const handleDelete = () => {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(result => {
        if (result.isConfirmed) {
          deleteMeet(meet._id);
          swalWithBootstrapButtons.fire("Deleted!", "The meeting has been deleted.", "success");
          return;
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire("Cancel!", "Uff, that was close!", "error");
        }
      });
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
              <button type="button" className="btn-delete" onClick={handleDelete}>
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
