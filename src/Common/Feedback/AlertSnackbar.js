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
    return (
        <Snackbar open={open} autoHideDuration={autoHideDuration} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}>
                Server Error
            </Alert>
        </Snackbar>
    );
  }
  
  export default AlertSnackbar;
  