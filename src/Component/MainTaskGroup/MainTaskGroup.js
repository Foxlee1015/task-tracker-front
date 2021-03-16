import React, { useEffect } from "react";

import useFetch from "../../utils/hooks/useFetch";


function MainTaskGroup({match}) {
  const { task_group_id } = match.params;
  const [data, loading] = useFetch(`${process.env.REACT_APP_API_URL}/tasks/group/${task_group_id}`);

  useEffect(()=>{
    console.log(data)
  }, [data])
  return (
    <div>
      {loading ? (
          "Loading..."
      ) : (
          <ul>
          {data && (
              <li key="1">
                  <p>dd</p>
              </li>
          )}
          </ul>
      )}
    </div>
  );
}
export default MainTaskGroup;
  