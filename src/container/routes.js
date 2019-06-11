import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// import component
import history from 'utils/history';
import RootContainer from 'container/RootContainer';
import HomePage from 'container/HomePage';
import Page1 from 'container/BHXH/Page1';
import MyContainer from 'container/List';
import UserContainer from 'container/User';

const AppRouter = () => {
  return (
    <Router history={history}>
      <RootContainer>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/bhxh" component={Page1} />
          <Route path="/my" component={MyContainer} />
          <Route path="/user" component={UserContainer} />
        </Switch>
      </RootContainer>
    </Router>
  );
};

export default AppRouter;
