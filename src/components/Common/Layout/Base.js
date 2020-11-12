import React from 'react';
import { Container, CssBaseline } from '@material-ui/core';

const Base = props => (
  <React.Fragment>
  <CssBaseline />
    <Container>
      { props.children }
    </Container>
  </React.Fragment>
);

export default Base;
