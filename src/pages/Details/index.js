import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import Button from '../../components/Button';
import Description from '../../components/Description';
import Chart from '../../components/Chart';

export default function Details() {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        flexDirection="column"
        height="90vh"
      >
        <NavLink to="/">
          <Button variant="contained" color="primary" text="Back" />
        </NavLink>
        <Description text="Hello world, hello america." />
        <Chart />
      </Box>
    </Container>
  );
}
