import { Route, Link, useRouteMatch } from "react-router-dom";

import MainTask from "../../Component/MainTask/MainTask";
import MainLink from "../../Component/MainLink/MainLink";
import MainTaskGroup from "../../Component/MainTaskGroup/MainTaskGroup";

function Main() {
    const match = useRouteMatch();

    return (
      <div>
        <p>Main</p>
        
        <Link to={`${match.url}/tasks`}>task</Link>
        <Link to={`${match.url}/links`}>link</Link>
        <Link to={`${match.url}/task-group`}>task-gorup</Link>
        
        <Route exact path={`${match.url}/tasks`} component={MainTask} />
        <Route path={`${match.url}/task-group/:task_group_id`} component={MainTaskGroup} />
        <Route path={`${match.url}/links`} component={MainLink} />
      </div>
    );
  }
  
  export default Main;