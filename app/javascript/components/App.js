import React from "react";
import { Route, Switch } from "react-router-dom";


//set up Router on the front end
const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={Airlines} />
      <Route exact path="/airlines/:slug" component={Airline} />
    </Switch>
  );
};


export default App;