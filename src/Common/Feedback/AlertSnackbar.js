import React from 'react';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function AlertSnackbar({
    open=false, 
    handleClose=()=>{},
    autoHideDuration=6000,
    severity="success"})
    {
    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return
        }
    };
    return (
        <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={handleSnackbarClose}>
            <Alert onClose={handleClose} severity={severity}>
                Server Error
            </Alert>
        </Snackbar>
    );
  }
  
  export default AlertSnackbar;
  