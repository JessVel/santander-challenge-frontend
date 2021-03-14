import React, { useReducer } from "react";
import WeatherapiContext from "./weatherapiContext";
import weatherapiReducer from "./weatherapiReducer";
import apiConnection from "../../config/apiConnection";
import moment from "moment";
import { DATE_TEMP, GET_TEMP, DATE_ERROR } from "../../types";

const OrderState = props => {
  const initialState = {
    tempForecast: [],
    tempDay: null,
  };

  const [state, dispatch] = useReducer(weatherapiReducer, initialState);

  const getTemp = async () => {
    const response = await apiConnection.get(`/${process.env.REACT_APP_CITY}?apikey=${process.env.REACT_APP_APIKEY}`);
    dispatch({
      type: GET_TEMP,
      payload: response.data.DailyForecasts,
    });
  };

  const getTempbyDay = async (date, tempForecast) => {
    try {
      if (!date) return;
      console.log(date);
      const result = tempForecast.filter(item => moment(item.Date).format("L") === date);
      if (result === "") return;

      const temp = result[0].Temperature.Maximum.Value;

      dispatch({
        type: DATE_TEMP,
        payload: temp,
      });
    } catch (error) {
      dispatch({
        type: DATE_ERROR,
      });
      console.log(error);
    }
  };

  return (
    <WeatherapiContext.Provider
      value={{
        tempForecast: state.tempForecast,
        tempDay: state.tempDay,
        getTemp,
        getTempbyDay,
      }}
    >
      {props.children}
    </WeatherapiContext.Provider>
  );
};

export default OrderState;
