import React, {useState, useEffect} from 'react';
import withRoot from './Page/withRoot';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Page/Home/Home";
import Main from "./Page/Main/Main";
import User from "./Page/User/User";
import Header from "./Component/Header/Header";

import AuthRoute from "./Auth/AuthRoute";

import { getUserInfoFromToken } from "./utils/utils";
import { registerUserInfoInStore} from "./redux/user/user";

import './App.css';

function App() {
  const [user, setUser] = useState(getUserInfoFromToken());
  const authenticated = user != null;
  const dispatch = useDispatch();

  useEffect(()=> {
    if (user !== null) {
      dispatch(registerUserInfoInStore(user));
    }
  }, [user, dispatch])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div style={{marginTop:64}}>
          <Switch>
            <Route exact path='/' component={Home} />
          <AuthRoute
            authenticated={!authenticated}
            redirect="/"
            path="/user"
            render={props => <User user={user} {...props} />}
          />
          <AuthRoute
            authenticated={authenticated}
            path="/main"
            render={props => <Main user={user} {...props} />}
          />
          <AuthRoute
            authenticated={authenticated}
            path="/admin"
            render={props => <Main user={user} {...props} />}
          />
            <Route path='/admin' component={Main} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default withRoot(App);
