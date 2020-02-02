import React from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Search from '../../components/Search';
import Title from '../../components/Title';

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
        <Title text="Search a company" />
        <Search />
      </Box>
    </Container>
  );
}
