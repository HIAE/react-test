import React from "react";
import { Switch, Route } from "react-router-dom";

// import pages
import Home from "../pages/Home/Home";
import Details from "../pages/Details/Details";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/:symbol/details" component={Details} />
    </Switch>
  );
};

export default Routes;
