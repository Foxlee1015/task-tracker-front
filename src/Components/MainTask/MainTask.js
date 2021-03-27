import React from "react";
import { Route, useRouteMatch} from "react-router-dom";

import CreateTask from "./CreateTask";
import ListTask from "./ListTask";


function MainTask() {
  const match = useRouteMatch();

  return (
    <div>
      <Route exact path={`${match.url}/`} component={MainTaskHome} />
    </div>
  );
}
export default MainTask;


function MainTaskHome() {
  return (
    <>
      <CreateTask />
      <ListTask />
    </>
  );
}