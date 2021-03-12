import React, { useReducer } from "react";
import WeatherapiContext from './weatherapiContext';
import weatherapiReducer from './weatherapiReducer';
import connection from '../../config/connection';
import moment from 'moment';
import { DATE_TEMP, GET_TEMP, DATE_ERROR } from "../../types";

const OrderState = props => {

  const forecast = [
    {
    "Date": "2021-03-12T07:00:00-03:00",
    "EpochDate": 1615543200,
    "Temperature": {
    "Minimum": {
    "Value": 69,
    "Unit": "F",
    "UnitType": 18
    },
    "Maximum": {
    "Value": 79,
    "Unit": "F",
    "UnitType": 18
    }
    },
    "Day": {
    "Icon": 4,
    "IconPhrase": "Intermittent clouds",
    "HasPrecipitation": false
    },
    "Night": {
    "Icon": 35,
    "IconPhrase": "Partly cloudy",
    "HasPrecipitation": false
    },
    "Sources": [
    "AccuWeather"
    ],
    "MobileLink": "http://m.accuweather.com/en/ar/buenos-aires/7894/daily-weather-forecast/7894?day=1&lang=en-us",
    "Link": "http://www.accuweather.com/en/ar/buenos-aires/7894/daily-weather-forecast/7894?day=1&lang=en-us"
    },
    {
    "Date": "2021-03-13T07:00:00-03:00",
    "EpochDate": 1615629600,
    "Temperature": {
    "Minimum": {
    "Value": 69,
    "Unit": "F",
    "UnitType": 18
    },
    "Maximum": {
    "Value": 78,
    "Unit": "F",
    "UnitType": 18
    }
    },
    "Day": {
    "Icon": 1,
    "IconPhrase": "Sunny",
    "HasPrecipitation": false
    },
    "Night": {
    "Icon": 33,
    "IconPhrase": "Clear",
    "HasPrecipitation": false
    },
    "Sources": [
    "AccuWeather"
    ],
    "MobileLink": "http://m.accuweather.com/en/ar/buenos-aires/7894/daily-weather-forecast/7894?day=2&lang=en-us",
    "Link": "http://www.accuweather.com/en/ar/buenos-aires/7894/daily-weather-forecast/7894?day=2&lang=en-us"
    },
    {
    "Date": "2021-03-14T07:00:00-03:00",
    "EpochDate": 1615716000,
    "Temperature": {
    "Minimum": {
    "Value": 70,
    "Unit": "F",
    "UnitType": 18
    },
    "Maximum": {
    "Value": 81,
    "Unit": "F",
    "UnitType": 18
    }
    },
    "Day": {
    "Icon": 1,
    "IconPhrase": "Sunny",
    "HasPrecipitation": false
    },
    "Night": {
    "Icon": 33,
    "IconPhrase": "Clear",
    "HasPrecipitation": false
    },
    "Sources": [
    "AccuWeather"
    ],
    "MobileLink": "http://m.accuweather.com/en/ar/buenos-aires/7894/daily-weather-forecast/7894?day=3&lang=en-us",
    "Link": "http://www.accuweather.com/en/ar/buenos-aires/7894/daily-weather-forecast/7894?day=3&lang=en-us"
    },
    {
    "Date": "2021-03-15T07:00:00-03:00",
    "EpochDate": 1615802400,
    "Temperature": {
    "Minimum": {
    "Value": 70,
    "Unit": "F",
    "UnitType": 18
    },
    "Maximum": {
    "Value": 81,
    "Unit": "F",
    "UnitType": 18
    }
    },
    "Day": {
    "Icon": 4,
    "IconPhrase": "Intermittent clouds",
    "HasPrecipitation": false
    },
    "Night": {
    "Icon": 40,
    "IconPhrase": "Mostly cloudy w/ showers",
    "HasPrecipitation": true,
    "PrecipitationType": "Rain",
    "PrecipitationIntensity": "Moderate"
    },
    "Sources": [
    "AccuWeather"
    ],
    "MobileLink": "http://m.accuweather.com/en/ar/buenos-aires/7894/daily-weather-forecast/7894?day=4&lang=en-us",
    "Link": "http://www.accuweather.com/en/ar/buenos-aires/7894/daily-weather-forecast/7894?day=4&lang=en-us"
    },
    {
    "Date": "2021-03-16T07:00:00-03:00",
    "EpochDate": 1615888800,
    "Temperature": {
    "Minimum": {
    "Value": 66,
    "Unit": "F",
    "UnitType": 18
    },
    "Maximum": {
    "Value": 77,
    "Unit": "F",
    "UnitType": 18
    }
    },
    "Day": {
    "Icon": 15,
    "IconPhrase": "Thunderstorms",
    "HasPrecipitation": true,
    "PrecipitationType": "Rain",
    "PrecipitationIntensity": "Heavy"
    },
    "Night": {
    "Icon": 12,
    "IconPhrase": "Showers",
    "HasPrecipitation": true,
    "PrecipitationType": "Rain",
    "PrecipitationIntensity": "Heavy"
    },
    "Sources": [
    "AccuWeather"
    ],
    "MobileLink": "http://m.accuweather.com/en/ar/buenos-aires/7894/daily-weather-forecast/7894?day=5&lang=en-us",
    "Link": "http://www.accuweather.com/en/ar/buenos-aires/7894/daily-weather-forecast/7894?day=5&lang=en-us"
    }
    ]

    const initialState = {
      tempForecast: [],
      tempDay: null
    };
  
    const [state, dispatch] = useReducer(weatherapiReducer, initialState);
  
    const getTemp = async () => {
       
        dispatch({
          type: GET_TEMP,
          payload:forecast,
        });
    };

    const getTempbyDay = async (date, tempForecast) => {
        try {

          if(!date)return;
          const result = tempForecast.filter(item => moment(item.Date).format("MMM Do YY") === date)
          if(result ==='')return;
          console.log(result)
          const temp = result[0].Temperature.Maximum.Value;

          dispatch({
            type: DATE_TEMP,
            payload:temp,
          });
        } catch (error) {

          dispatch({
            type: DATE_ERROR,
          })
          console.log(error);
        }
      };
  
    return (
      <WeatherapiContext.Provider
        value={{
          tempForecast: state.tempForecast,
          tempDay: state.tempDay,
          getTemp,
          getTempbyDay
        }}
      >
        {props.children}
      </WeatherapiContext.Provider>
    );
  };
  
  export default OrderState;