import React, {useState} from "react";
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

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
  const [data, loading, reFetch] = useFetch(`${process.env.REACT_APP_API_URL}/tasks/`, []);  
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [selectedRows, setSelectedRows] = useState([]);
  const [updateLoading, setUpdateLoading] = useState(false);


  const handleClickCheck = (row) => {
    setUpdateLoading(true);
    const checked = row.checked === 0 ? 1 : 0;
    const endpoint = `tasks/${row.id}?checked=${checked}`;

    apiPostCall({
      endpoint,
      responseCallback: () => reFetch(),
      failCallback: () => setSnackbarOpen(true),
      finalCallback: () => setUpdateLoading(false)
    })
  }

  const handleCellClick = (cell) => {
    if (cell.field === "checked") {
      handleClickCheck(cell.row);
    }
  }

  const handleDelete = (e) => {
    e.preventDefault();
    console.log(selectedRows);
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'checked', headerName: 'Checked', width: 150,
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
    <div>
      <div className={classes.DataBox}>
        <AlertSnackbar open={snackbarOpen} handleClose={setSnackbarOpen} severity="error" />
        <DataGrid
          loading={loading || updateLoading}
          rows={data} 
          columns={columns} 
          pageSize={5} 
          checkboxSelection
          disableSelectionOnClick={true} // have to click the select checkbox not the row to select
          onSelectionModelChange={(row)=>{
            setSelectedRows(row.selectionModel)}}
          onCellClick={(row)=>{handleCellClick(row)}}
        />
      </div>
      <Button 
        onClick={e=>handleDelete(e)} 
        disabled={selectedRows.length===0} 
        color="primary">Delete
      </Button>
    </div>
    
  );
}