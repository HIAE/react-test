import React, { useState } from 'react'

import AutoComplete from './components/AutoComplete/'

import {
  Container,
  Grid
} from '@material-ui/core'

import ModalMessage from './components/ModalMessage'

function App() {

  const [modalInfo, setModalInfo] = useState({
    open: false,
    handleClose: () => setModalInfo({open: false}),
  })

  const onError = msg => {
    setModalInfo({
      ...modalInfo,
      open: true,
      modal: {
        title: 'Ops...',
        description: msg,
        txtBtn: 'Ok!'
      }
    })
  }

  return (
    <div className="App">
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
            <AutoComplete onError={onError}/>
          </Grid>
        </Grid>
      </Container>
      {modalInfo.open && 
        <ModalMessage 
          open={modalInfo.open}
          handleClose={modalInfo.handleClose}
          modal={modalInfo.modal}
        />}
    </div>
  );
}

export default App;
