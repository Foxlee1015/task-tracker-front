import withRoot from './Page/withRoot';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Page/Home/Home";
import Main from "./Page/Main/Main";
import User from "./Page/User/User";
import Header from "./Component/Header/Header";

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div style={{marginTop:64}}>
          <Switch>
            <Route exact path='/' component={Home} /> {/* 로그인 전  */}
            <Route path='/main' component={Main} /> {/* 로그인 후  */}
            <Route path='/user' component={User} />
            <Route path='/admin' component={Main} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default withRoot(App);
