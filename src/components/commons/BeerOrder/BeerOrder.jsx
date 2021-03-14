import React, { useState, useContext, useEffect } from "react";
import beerOrderContext from "../../../context/BeerOrder/beerOrderContext";
import weatherApiContext from "../../../context/WeatherApi/weatherapiContext";
import Spinner from "../Spinner/Spinner";
import beer from "../../../assets/beer.png";
import "./styles/beerorder.css";

const BeerOrder = ({ assistants, temp, name, date }) => {
  const { beerTotal, getOrder } = useContext(beerOrderContext);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    setLoading(true);

    if (assistants && temp) {
      setData({
        person: assistants.split(",").length,
        temp: temp,
      });
    } else {
      return;
    }
    getOrder(data);
    setLoading(false);
    return;
  }, [assistants]);

  return (
    <>
      {loading === false ? (
        <div>
          <h1>You're gonna need...</h1>
          {beerTotal ? (
            <div className="beer-total">
              <h3>{beerTotal.order}order of </h3>

              <img src={beer} />
            </div>
          ) : (
            <Spinner />
          )}
        </div>
      ) : null}
    </>
  );
};

export default BeerOrder;
