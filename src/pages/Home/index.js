import React from 'react';
import Box from '@material-ui/core/Box';
import Search from '../../components/Search';

export default function Home() {
  return (
    <Box
      fixed
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      height="90vh"
    >
      <h1>Hello Home</h1>
      <Search />
    </Box>
  );
}
