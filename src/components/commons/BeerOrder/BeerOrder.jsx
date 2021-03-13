import React, { useState, useContext, useEffect } from "react";
import beerOrderContext from "../../../context/BeerOrder/beerOrderContext";
import meetContext from "../../../context/Meet/meetContext";
import Spinner from "../Spinner/Spinner";
import beer from "../../../assets/beer.png";
import "./styles/beerorder.css";
import formContext from "../../../context/Form/formContext";

const BeerOrder = ({ assistants, temp }) => {
  const { beerTotal, getOrder } = useContext(beerOrderContext);
  const { date, tempDay } = useContext(meetContext);

  const [loading, setLoading] = useState(false);

  let data;

  useEffect(() => {
    setLoading(true);

    if (assistants && temp) {
      data = {
        person: assistants.split(",").length,
        temp: temp,
      };
    }

    if (data === null) return;
    getOrder(data);
    setLoading(false);
  }, [date, tempDay, assistants, temp]);

  console.log(beerTotal);

  return (
    <>
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
    </>
  );
};

export default BeerOrder;
