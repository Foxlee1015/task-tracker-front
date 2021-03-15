import React from "react";

import CreateTask from "./CreateTask";

import useFetch from "../../utils/hooks/useFetch";


function MainTask() {
  const [data, loading] = useFetch("http://54.180.93.113:16980/api/tasks/");
  return (
    <div>
      <p>MainTask</p>
      <CreateTask />
      {loading ? (
          "Loading..."
      ) : (
          <ul>
          {data && data.map(({ id, url, description }) => (
              <li key={`url-${id}`}>
                  <a href={url}>{description}</a>
              </li>
          ))}
          </ul>
      )}
    </div>
  );
}
export default MainTask;
  