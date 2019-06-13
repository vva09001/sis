import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// import component
import history from 'utils/history';
import RootContainer from 'container/RootContainer';
import HomePage from 'container/HomePage';
import Page1 from 'container/BHXH/Page1';
import Infomations from 'container/BHXH/Infomations';
import Login from 'container/User/Login';

const AppRouter = () => {
  return (
    <Router history={history}>
      <RootContainer>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/homepage" component={HomePage} />
          <Route path="/page1" component={Page1} />
          <Route path="/info" component={Infomations} />
        </Switch>
      </RootContainer>
    </Router>
  );
};

export default AppRouter;
