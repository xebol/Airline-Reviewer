import React, { useState, useEffect } from "react";
import axios from "axios";
import Airline from "./Airline"

const Airlines = () => {
  const [airlines, setAirlines] = useState([]);

  useEffect(() => {
    //get all of the airlines from the API
    //update airlines in our state

    axios.get('/api/v1/airlines.json')
      .then((response) => {
        console.log('Response', response.data.data);
        setAirlines(response.data.data);
      })
      .catch((err) => {
        console.log('Error', err);
      });
  }, [airlines.length]);

  const list = airlines.map((item) => {
    return (
      <li key={item.attributes.name}>
        {item.attributes.name}
      </li>
    );
  });

  return (
    <div className="home">
      <div className="header">
        <h1>Open Flights</h1>
        <div className="subheader">Honest, unbiased airline reviews.</div>
      </div>
      <div className="grid">
        <ul>{list}</ul>
      </div>
    </div>
  );
};


export default Airlines;