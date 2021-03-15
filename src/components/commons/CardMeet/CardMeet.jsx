import React, { useContext, useEffect } from "react";
import meetContext from "../../../context/Meet/meetContext";
import authContext from "../../../context/auth/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import moment from "moment";
import "./styles/cardmeet.css";

const CardMeet = ({ meet }) => {
  const { deleteMeet, editMeet, getMeet } = useContext(meetContext);
  const { admin } = useContext(authContext);

  const { t } = useTranslation();

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
        title: ` ${t("cardmeet.swal.title")}`,
        text: `${t("cardmeet.swal.revert")}`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: `${t("swal.delete")}`,
        cancelButtonText: `${t("swal.cancel")}`,
        reverseButtons: true,
      })
      .then(result => {
        if (result.isConfirmed) {
          deleteMeet(meet._id);
          swalWithBootstrapButtons.fire(`${t("swal.deleted")}`, `${t("swal.meet.deleted")}`, "success");
          return;
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(`${t("swal.canceled")}`, `${t("swal.close")}`, "error");
        }
      });
  };

  return (
    <>
      <li className="meet shadow">
        <div className="actions">
          <h3>{meet.name}</h3>
          <small>{moment(meet.date).format("L")}</small>
          <h3>{meet.temp} C°</h3>
        </div>
        <section className="flex-section">
          <div>
            {meet.asistance === true ? (
              <button type="button" className="complete btn-assistance" onClick={() => changeAssistance(meet)}>
                {t("cardmeet.attend")}
              </button>
            ) : (
              <button type="button" className="incomplete btn-assistance" onClick={() => changeAssistance(meet)}>
                {t("cardmeet.noattend")}
              </button>
            )}
          </div>
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
        </section>
      </li>
    </>
  );
};

export default CardMeet;
