import { Route, useRouteMatch } from "react-router-dom";

import MainHome from "../../Component/MainHome/MainHome";
import MainTask from "../../Component/MainTask/MainTask";
import MainLink from "../../Component/MainLink/MainLink";
import MainTaskGroup from "../../Component/MainTaskGroup/MainTaskGroup";

function Main() {
    const match = useRouteMatch();

    return (
      <div>      
        <MainHome />
        <Route exact path={`${match.url}/tasks`} component={MainTask} />
        <Route path={`${match.url}/task-group`} component={MainTaskGroup} />
        <Route path={`${match.url}/links`} component={MainLink} />
      </div>
    );
  }
  
  export default Main;