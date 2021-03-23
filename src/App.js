import React, {useState, useEffect} from 'react';
import withRoot from './Page/withRoot';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Page/Home/Home";
import Main from "./Page/Main/Main";
import User from "./Page/User/User";
import Header from "./Component/Header/Header";

import AuthRoute from "./Auth/AuthRoute";

import './App.css';

function App() {
  const dispatch = useDispatch();
  const { userToken } = useSelector(
    state => ({
      userToken: state.user,
    }),
    shallowEqual
  );
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if (token !== null && token !== undefined) {
      // validateToken();
      dispatch({type:"VALIDATE_TOKEN_REQUEST"});
      console.log(userToken);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div style={{marginTop:64}}>
          <Switch>
            <Route exact path='/' component={Home} />     
            <Route path='/user' render={()=> <User setUser={setUser} />} />
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
            <Route path='/admin' component={Main} /> */}
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default withRoot(App);
