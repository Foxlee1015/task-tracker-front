import { Route, Link, useRouteMatch } from "react-router-dom";

import UserLogin from "./UserLogin";
import UserJoin from "./UserJoin";
import UserFindIdInfo from "./UserFindIdInfo";
import UserFindPwInfo from "./UserFindPwInfo";

function User() {
    const match = useRouteMatch();

    return (
      <div>
        <p>User</p>
        
        <Link to={`${match.url}/login`}>login</Link>
        <Link to={`${match.url}/join`}>signup</Link>
        <Link to={`${match.url}/findIdinfo`}>findIdinfo</Link>
        <Link to={`${match.url}/findPwinfo`}>findPwinfo</Link>
        
        <Route exact path={`${match.url}/login`} component={UserLogin} />
        <Route path={`${match.url}/join`} component={UserJoin} />
        <Route path={`${match.url}/findIdinfo`} component={UserFindIdInfo} />
        <Route path={`${match.url}/findPwinfo`} component={UserFindPwInfo} />
      </div>
    );
  }
  
  export default User;
  