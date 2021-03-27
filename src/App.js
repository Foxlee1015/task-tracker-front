import React, {useState, useEffect} from 'react';
import withRoot from './Pages/withRoot';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Main from "./Pages/Main/Main";
import User from "./Pages/User/User";
// import NotFound from "./Pages/NotFound";
import Header from "./Components/Header/Header";
import Copyright from "./Common/Copyright";
import AuthRoute from "./Auth/AuthRoute";

import { getUserInfoFromToken } from "./utils/utils";
import { registerUserInfoInStore} from "./redux/user/user";

import './App.css';

function App() {
  const [user, setUser] = useState(getUserInfoFromToken());
  const authenticated = user != null;
  const dispatch = useDispatch();

  useEffect(()=> {
    if (user === null) {
      setUser(getUserInfoFromToken());
    } else {
      dispatch(registerUserInfoInStore(user));
    }
  }, [user, dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
            <>
              <Header />
              <Route exact path="/"
                render={props => <Home user={user} {...props} />}
              />
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
            
            {/* <Route component={NotFound} /> */}
            {/* <Route path="/404" component={NotFound} />
            <Redirect to="/404" /> */}
            <Copyright />
            </>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default withRoot(App);
