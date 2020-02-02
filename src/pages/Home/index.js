import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Search from '../../components/Search';

export default function Home() {
  return (
    <Container maxWidth="md">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        height="90vh"
      >
        <h1>Hello Home</h1>
        <Search />
      </Box>
    </Container>
  );
}
