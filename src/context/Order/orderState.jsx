import React, { useReducer } from "react";
import OrderContext from './orderContex';
import orderReducer from './orderReducer';
import connection from '../../config/connection';
import { GET_ORDER } from "../../types";

const OrderState = props => {
    const initialState = {
      order: [],
    };
  
    const [state, dispatch] = useReducer(orderReducer, initialState);
  
    const getOrder = async (data) => {
      try {
        const response = await connection.get(`/api/vendor`, data);
        dispatch({
          type: GET_ORDER,
          payload:data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <OrderContext.Provider
        value={{
         order : state.order,
         getOrder
        }}
      >
        {props.children}
      </OrderContext.Provider>
    );
  };
  
  export default OrderState;