import React, { useReducer } from "react";
import BeerOrderContex from "./beerOrderContext";
import beerOrderReducer from "./beerOrderReducer";
import { GET_ORDER, CREATE_ORDER, GET_ERROR } from "../../types";

import connection from "../../config/connection";

const BeerOrderState = props => {
  const initialState = {
    beerTotal: null,
    beerOrder: [],
  };

  const [state, dispatch] = useReducer(beerOrderReducer, initialState);

  const getOrder = async data => {
    const response = await connection.post("/api/order", data);

    try {
      dispatch({
        type: GET_ORDER,
        payload: response.data,
      });
      return;
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_ERROR,
        payload: error.response.data.msg,
      });
    }
  };

  const createOrder = async data => {
    const response = await connection.post("/api/order", data);
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
        beerOrder: state.beerOrder,
        beerTotal: state.beerTotal,
        getOrder,
        createOrder,
      }}
    >
      {props.children}
    </BeerOrderContex.Provider>
  );
};

export default BeerOrderState;
