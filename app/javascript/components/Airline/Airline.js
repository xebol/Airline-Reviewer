import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import ReviewForm from "./ReviewForm";
import styled from "styled-components";

const Wrapper = styled.div`
margin-left: auto;
margin-right: auto;
display: grid;
grid-template-columns: repeat(2, 1fr);
`;
const Column = styled.div`
background: #fff;
height: 100vh;
overflow: scroll;


&:last-child {
  background: #000;
}
`;
const Main = styled.div`
padding-left: 50px;
`;

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

  const handleChange = (event) => {
    //handle changes on the form
    event.preventDefault();
    const name = event.target.name;
    const value = event.target.value;

    setReview(Object.assign({}, review, { [name]: value }));
  };

  const handleSubmit = (event) => {
    //handles the form when it's submitted
    event.preventDefault();

    const csrfToken = document.querySelector('[name=csrf-token').content;
    axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

    const airline_id = airline.data.id;

    axios.post('/api/v1/reviews', { review, airline_id })
      .then((response) => {
        console.log('Response', response);
        debugger;
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  };

  return (
    <Wrapper>
      {loaded &&
        <>
          <Column>
            <Main>

              <Header
                attributes={airline.data.attributes}
                reviews={airline.included}
              />
            </Main>
            <div className="reviews"></div>
          </Column>
          <Column>
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              attributes={airline.data.attributes}
              review={review}
            />
          </Column>
        </>
      }
    </Wrapper>
  );
};


export default Airline;