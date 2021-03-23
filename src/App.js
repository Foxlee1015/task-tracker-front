import React, {useState, useEffect} from 'react';
import withRoot from './Page/withRoot';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Page/Home/Home";
import Main from "./Page/Main/Main";
import User from "./Page/User/User";
import Header from "./Component/Header/Header";

import AuthRoute from "./Auth/AuthRoute";
import { apiPostCall } from "./utils/apicall"

import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if (token !== null && token !== undefined) {
      validateToken();
    }
  }, []);

  
  const validateToken = () => {
    const endpoint = 'tokens/validate';
    const responseCallback = function (response) {
        if (response.status === 200) {
            setUser(response.data.result);
        }
    };

    apiPostCall({
        endpoint,
        responseCallback,
    })
}


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
