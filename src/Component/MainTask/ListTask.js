import React from "react";
import { Link } from "react-router-dom";

import useFetch from "../../utils/hooks/useFetch";


function ListTask() {
  const [data, loading] = useFetch(`${process.env.REACT_APP_API_URL}/tasks`);
  return (
    <div>
      {loading ? (
          "Loading..."
      ) : (
          <ul>
          {data && data.map(({ id, group_id, title, text }) => (
              <li key={`task-${id}`}>
                <Link to={`/main/task-group/${group_id}`}>{group_id}-{title}-{text}</Link>
              </li>
          ))}
          </ul>
      )}
    </div>
  );
}
export default ListTask;
  