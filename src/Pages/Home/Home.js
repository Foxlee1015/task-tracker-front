import React, {useEffect} from 'react';
import { useSelector } from 'react-redux';

import { useHistory } from 'react-router';

import HomeBanner from "./HomeBanner";
import HomeHowTaskWorks from "./HomeHowTaskWorks";

export default function Home({user, redirect=""}) {
  const history = useHistory();
  const userInfo = useSelector(
    state => (state.user)
  );
  
  useEffect(()=>{
    if (redirect !== "" && (userInfo.name !== null || (user !== null && user.iss))) {
      history.push(redirect);
    }
  },[user, userInfo, redirect, history])
  
    return (
      <React.Fragment>
        <HomeBanner />
        <HomeHowTaskWorks />
      </React.Fragment>
    );
  }
  