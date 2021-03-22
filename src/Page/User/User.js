import React from 'react';
import { Route, useRouteMatch } from "react-router-dom";

import UserLogin from "./UserLogin";
import UserJoin from "./UserJoin";
import UserFindIdInfo from "./UserFindIdInfo";
import UserFindPwInfo from "./UserFindPwInfo";

function User() {
    const match = useRouteMatch();

    return (
        <React.Fragment>
          <Route exact path={`${match.url}/login`} component={UserLogin} />
          <Route path={`${match.url}/join`} component={UserJoin} />
          <Route path={`${match.url}/findIdinfo`} component={UserFindIdInfo} />
          <Route path={`${match.url}/findPwinfo`} component={UserFindPwInfo} />
        </React.Fragment>
    );
  }
  
  export default User;
  