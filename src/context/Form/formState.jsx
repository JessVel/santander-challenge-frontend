import React, { useReducer } from "react";
import FormContext from "./formContext";
import FormReducer from "./formReducer";
import { SHOW_FORM, HIDE_FORM } from "../../types";

const FormState = props => {
  const initialState = {
    form: false,
  };

  const [state, dispatch] = useReducer(FormReducer, initialState);

  const showForm = async () => {
    try {
      dispatch({
        type: SHOW_FORM,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const hideForm = async () => {
    try {
      dispatch({
        type: HIDE_FORM,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FormContext.Provider
      value={{
        form: state.form,
        showForm,
        hideForm,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
};

export default FormState;
