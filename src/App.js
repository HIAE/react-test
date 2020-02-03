import React, { useState, useEffect } from 'react'

import AutoComplete from './components/AutoComplete/'

import {
  Container,
  Grid
} from '@material-ui/core'

import ModalMessage from './components/ModalMessage'

import useStyles from './assets/styles/app'

function App() {

  const classes = useStyles()
  const [modalInfo, setModalInfo] = useState({
    open: false,
  })

  useEffect(() => {
    document.title = 'Welcome!'
  }, [])

  const onError = (msg, callback) => {
    if(!modalInfo.open)
      setModalInfo({
        handleClose: () => {
          callback()
          setModalInfo({open: false})
        },
        open: true,
        modal: {
          title: 'Ops...',
          description: msg,
          txtBtn: 'Ok!'
        }
      })
  }

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
