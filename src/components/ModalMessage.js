import React from 'react'

import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Slide,
    Button
} from '@material-ui/core'

import { useSelector } from 'react-redux'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

function ModalMessage(){

    const modalConfig = useSelector(state => {
        return state.modalState.modal
    })

    return(
        <Dialog
            open={modalConfig.open}
            TransitionComponent={Transition}
            onClose={modalConfig.handleClose}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="alert-dialog-slide-title">{modalConfig.title}</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    {modalConfig.description}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={modalConfig.handleClose} color="primary">
                    {modalConfig.txtBtn}
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default ModalMessage