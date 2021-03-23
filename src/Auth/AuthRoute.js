import React, {useEffect} from "react";
import { Route, Redirect } from "react-router-dom";

import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import {getUserByToken} from "../redux/user/user";

function AuthRoute({ authenticated, component: Component, render, ...rest }) {
  const userInfo = useSelector(
    state => (state.user)
  );
  // const authenticated = user != null;
  const dispatch = useDispatch();

  useEffect(()=>{
    const token = localStorage.getItem('token');
    if (token !== null && token !== undefined) {
      dispatch(getUserByToken());
    }
  }, []);


  useEffect(()=>{
    console.log(userInfo);
  }, [userInfo]);
  
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          render ? (
            render(props)
          ) : (
            <Component {...props} />
          )
        ) : (
          <Redirect
            to={{ pathname: "/user/login", state: { from: props.location } }}
          />
        )
      }
    />
  )
}

export default AuthRoute