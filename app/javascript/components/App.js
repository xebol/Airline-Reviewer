import React from "react";
import { Routes, Route } from "react-router-dom";
import Airline from "./Airline/Airline";
import Airlines from "./Airlines/Airlines";


//set up Router on the front end
const App = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Airlines />} />
      <Route exact path="/airlines/:slug" element={<Airline />} />
    </Routes>
  );
};


export default App;