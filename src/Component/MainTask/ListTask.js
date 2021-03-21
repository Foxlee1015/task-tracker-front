import React from "react";
// import { Link } from "react-router-dom";

import { DataGrid } from '@material-ui/data-grid';
import useFetch from "../../utils/hooks/useFetch";

import CircularProgress from '@material-ui/core/CircularProgress';


function ListTask() {
  const [data, loading] = useFetch(`${process.env.REACT_APP_API_URL}/tasks`);

  return (
    <div>
      {loading ? (
          <CircularProgress />
      ) : (
          <ul>
          {/* {data && data.map(({ id, group_id, title, text }) => (
              <li key={`task-${id}`}>
                <Link to={`/main/task-group/${group_id}`}>{group_id}-{title}-{text}</Link>
              </li>
          ))} */}
          {data && <DataTable data={data} /> }
          </ul>
      )}
    </div>
  );
}
export default ListTask;
  

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

function DataTable({data}) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid rows={data} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}