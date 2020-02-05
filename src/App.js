import React, { useEffect } from 'react'

import AutoComplete from './components/AutoComplete/'

import {
  Container,
  Grid
} from '@material-ui/core'

import ModalMessage from './components/ModalMessage'

import useStyles from './assets/styles/app'

function App() {

  const classes = useStyles()

  useEffect(() => {
    document.title = 'Welcome!'
  }, [])

  return (
    <div className={`App ${classes.bgContainer}`}>
      <Container>
        <Grid 
          alignItems="center"
          justify="center"
          style={{ height: '90vh' }}
          container
        >
          <Grid 
            item
            xs={10}
          >
            <AutoComplete />
          </Grid>
        </Grid>
      </Container>
      <ModalMessage />
    </div>
  );
}

export default App;
