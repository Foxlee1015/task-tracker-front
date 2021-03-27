import { Route, useRouteMatch } from "react-router-dom";

import MainHome from "../../Components/MainHome/MainHome";
import MainTask from "../../Components/MainTask/MainTask";
import MainLink from "../../Components/MainLink/MainLink";
import MainTaskGroup from "../../Components/MainTaskGroup/MainTaskGroup";

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