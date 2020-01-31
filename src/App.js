import React from 'react'

import AutoComplete from './components/AutoComplete/'

import {
  Container,
  Grid
} from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Container>
        <Grid 
          alignItems="center"
          justify="center"
          style={{ height: '100vh' }}
          container
        >
          <Grid 
            item
            xs={12}
            lg={10}
          >
            <AutoComplete/>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
