import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from 'pages/Home'
import Details from 'pages/Details'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/:symbol/details" exact component={Details} />
    </Switch>
  );
}
