import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <>
      <div>This is the Airlines Component</div>
      <ul>{list}</ul>
    </>
  );
};


export default Airlines;