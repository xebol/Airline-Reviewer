import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

const Airline = () => {
  const [airline, setAirline] = useState({});
  const [review, setReview] = useState({});
  const [loaded, setLoaded] = useState(false);


  const { slug } = useParams();

  useEffect(() => {
    const url = `/api/v1/airlines/${slug}`;

    axios.get(url)
      .then((response) => {
        setAirline(response.data);
        setLoaded(true);
      })
      .catch((error) => {
        console.log('Error:', error);
      });

  }, []);

  return (
    <div className="wrapper">

      <div className="column-left">
        {loaded &&
          <Header
            attributes={airline.data.attributes}
            reviews={airline.included}
          />
        }
        <div className="reviews"></div>
      </div>
      <div className="column-right">
        <div className="review-form">Review Form Goes Here</div>
      </div>

    </div>
  );
};


export default Airline;