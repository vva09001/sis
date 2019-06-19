import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

// import component
import history from 'utils/history';
import RootContainer from 'container/RootContainer';
import HomePage from 'container/HomePage';
import Page1 from 'container/BHXH/Page1';
import Infomations from 'container/BHXH/Infomations';
import Login from 'container/User/Login';
import NoParticipation from 'container/Search/NoParticipation';
import Awareness from 'container/WrongPerception/Awareness';
import Action from 'container/WrongPerception/Action';
import Time from '../container/Time';
const AppRouter = () => {
  return (
    <Router history={history}>
      <RootContainer>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/homepage" component={HomePage} />
          <Route path="/page1" component={Page1} />
          <Route path="/info" component={Infomations} />
          <Route path="/noParticipation" component={NoParticipation} />
          <Route path="/awareness" component={Awareness} />
          <Route path="/action" component={Action} />
          <Route path="/time" component={Time} />
        </Switch>
      </RootContainer>
    </Router>
  );
};

export default AppRouter;
