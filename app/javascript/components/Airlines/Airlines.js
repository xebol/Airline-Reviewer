import { React, useState, useEffect } from "react";
import axios from "axios";

const Airlines = () => {
  const [airlines, setAirlines] = useState([])

  useEffect(() => {
    //get all of the airlines from the API
    //update airlines in our state


    axios.get('/api/v1/airlines.json')
    .then((response) => {
      console.log('Response', response)
    })
    .catch((err) => {
      console.log('Error', err)
    })
  }, [airlines.length])

  return (
    <div>This is the Airlines Component</div>
  );
};


export default Airlines;