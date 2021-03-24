import React from "react";
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import useFetch from "../../utils/hooks/useFetch";


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

function ListTask() {

  return (
    <div>
      <DataTable />
    </div>
  );
}
export default ListTask;
  

function DataTable() {
  const classes = useStyles();
  const [data, loading] = useFetch(`${process.env.REACT_APP_API_URL}/tasks/`, []);  
  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'checked', headerName: 'Checked', width: 70 },
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
      <div className={classes.progressBox}>
        {loading && <CircularProgress />}
      </div>
        <DataGrid rows={data} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}