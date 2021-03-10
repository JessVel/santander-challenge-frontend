import React, { useReducer } from "react";
import MeetContext from './meetContext';
import MeetReducer from './meetReducer'
import connection from '../../config/connection'
import { EDIT_MEET, GET_MEET, DELETE_MEET, CREATE_MEET } from "../../types";

const MeetState = props => {
  const initialState = {
    meets: [],
  };

  const [state, dispatch] = useReducer(MeetReducer, initialState);

  const getMeet = async (email) => {
    try {
      const response = await connection.get(`/api/meet`);
      dispatch({
        type: GET_MEET,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createMeet = async (meet) => {
    try {
      await connection.post("/api/meet", meet);
      dispatch({
        type: CREATE_MEET,
        payload: meet,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMeet = async (id) => {
    try {
      await connection.delete(`/api/meet/${id}`);
      dispatch({
        type: DELETE_MEET,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const editMeet = async meet => {
    try {
      await connection.put(`/api/meet/${meet._id}`, meet);
      dispatch({
        type: EDIT_MEET,
        payload: meet,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MeetContext.Provider
      value={{
        meets: state.meets,
        getMeet,
        createMeet,
        deleteMeet,
        editMeet
      }}
    >
      {props.children}
    </MeetContext.Provider>
  );
};

export default MeetState;