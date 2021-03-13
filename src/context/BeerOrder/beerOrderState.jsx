import React, { useReducer } from "react";
import BeerOrderContex from "./beerOrderContext";
import beerOrderReducer from "./beerOrderReducer";
import { GET_ORDER, CREATE_ORDER } from "../../types";

import apiConnection from "../../config/apiConnection";

const BeerOrderState = props => {
  const initialState = {
    order: [],
  };

  const [state, dispatch] = useReducer(beerOrderReducer, initialState);

  const getOrder = async data => {
    const response = await apiConnection.get("/api/order", data);

    try {
      dispatch({
        type: GET_ORDER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createOrder = async data => {
    const response = await apiConnection.post("/api/order", data);
    try {
      dispatch({
        type: CREATE_ORDER,
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <BeerOrderContex.Provider
      value={{
        order: state.order,
        getOrder,
        createOrder,
      }}
    >
      {props.children}
    </BeerOrderContex.Provider>
  );
};

export default BeerOrderState;
