import React from "react";

const CardMeet = () => {
  //confirmar asistencia
  //   const changeAssistance = () => {
  //     if (meet.estado) {
  //       meet.estado = false;
  //     } else {
  //       meet.estado = true;
  //     }
  //     actualizarTarea(tarea);
  //   };

  return (
    <li className="tarea sombra">
      {/* <p>{tarea.nombre}</p> */}
      <div className="estado">
        {tarea.estado ? (
          <button type="button" className="completo" onClick={() => cambiarEstado(tarea)}>
            Completo
          </button>
        ) : (
          <button type="button" className="incompleto" onClick={() => cambiarEstado(tarea)}>
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button type="button" className="btn btn-primario" onClick={() => seleccionarTarea(tarea)}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <button type="button" className="btn btn-secundario" onClick={() => handleOnClick(tarea._id)}>
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </li>
  );
};

export default CardMeet;
