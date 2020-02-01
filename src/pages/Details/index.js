import React from 'react';

import Button from '../../components/Button';
import Description from '../../components/Description';

export default function Details() {
  return (
    <>
      <h1>Hello Details</h1>
      <Button variant="contained" color="primary" text="Back" />
      <Description text="Hello world, hello america." />
    </>
  );
}
