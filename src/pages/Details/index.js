import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../../components/Button';
import Description from '../../components/Description';
import Chart from '../../components/Chart';

export default function Details() {
  return (
    <>
      <h1>Hello Details</h1>
      <NavLink to="/">
        <Button variant="contained" color="primary" text="Back" />
      </NavLink>
      <Description text="Hello world, hello america." />
      <Chart />
    </>
  );
}
