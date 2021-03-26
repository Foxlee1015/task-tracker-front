import React, {useState} from "react";
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Checkbox from '@material-ui/core/Checkbox';

import useFetch from "../../utils/hooks/useFetch";
import  { apiPostCall } from "../../utils/apicall";
import AlertSnackbar from "../../Common/Feedback/AlertSnackbar";


const useStyles = makeStyles((theme) => ({
  progressBox: {
    position:'absolute', 
    left:'50%', 
    top:60
  },
  DataBox: {
    position:'relative',
    width:'100%',
    height:400, 
  }
}));

export default function ListTask() {
  const classes = useStyles();
  const [data, loading] = useFetch(`${process.env.REACT_APP_API_URL}/tasks/`, []);  
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleClickCheck = (row) => {
    const checked = row.checked === 0 ? 1 : 0;
    const endpoint = `tasks/${row.id}?checked=${checked}`;

    const failCallback = () => {
      setSnackbarOpen(true);
    }
    const responseCallback = () => {
      console.log('refresh~')
    }

    apiPostCall({
      endpoint,
      responseCallback,
      failCallback,
    })
  }

  const handleCellClick = (cell) => {
    if (cell.field === "checked") {
      handleClickCheck(cell.row);
    }
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'checked', headerName: 'Checked', width: 70,
      renderCell: (params) => {
        return (
          <Checkbox
            checked={params.row.checked === 1 ? true : false}
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
            
        />
        )
      }
    },
    { field: 'title', headerName: 'Title', width: 130 },
    {
      field: 'text',
      headerName: 'Text',
      type: 'number',
      width: 160,
    },
    { field: 'datetime', headerName: 'Datetime', width: 200 },
  ];
  return (
    <div className={classes.DataBox}>
      <AlertSnackbar open={snackbarOpen} handleClose={setSnackbarOpen} severity="error" />
      <div className={classes.progressBox}>
        {loading && <CircularProgress />}
      </div>
        <DataGrid 
          rows={data} 
          columns={columns} 
          pageSize={5} 
          checkboxSelection
          onRowSelected={(row)=>{
            console.log(row);}}
          onCellClick={(row)=>{
            console.log(row);
            handleCellClick(row);
          }} 
            />
    </div>
  );
}