import { Route, Link, useRouteMatch } from "react-router-dom";

import MainTask from "../../Component/MainTask/MainTask";
import MainLink from "../../Component/MainLink/MainLink";

function Main() {
    const match = useRouteMatch();

    return (
      <div>
        <p>Main</p>
        
        <Link to={`${match.url}`}>task</Link>
        <Link to={`${match.url}/links`}>link</Link>
        
        <Route exact path={`${match.url}/`} component={MainTask} />
        <Route path={`${match.url}/links`} component={MainLink} />
      </div>
    );
  }
  
  export default Main;
  