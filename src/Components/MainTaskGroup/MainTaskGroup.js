import React from "react";

import CircularProgress from '@material-ui/core/CircularProgress';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';

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

function MainTaskGroup() {

  return (
    <div>
      <DataTable />
    </div>
  );
}
export default MainTaskGroup;

function DataTable() {
  const classes = useStyles();
  const [data, loading] = useFetch(`${process.env.REACT_APP_API_URL}/tasks/groups`, []);  
  const columns = [
    { field: 'id', type: 'number', headerName: 'ID', width: 80 },
    { field: 'title', headerName: 'Title', width: 100 },
    { field: 'text', headerName: 'Text', width: 200 },
    { field: 'selected_date', headerName: 'Date', width: 160 },
    { field: 'end_date', headerName: 'Finish Date', width: 160 },
    { field: 'repeat_type', type: 'number', headerName: 'Repeat type', width: 160 },
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