import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'utils/history';
import RootContainer from 'container/RootContainer';
import HomePage from 'container/HomePage';
import Awareness from 'container/WrongPerception/Awareness';
import Action from 'container/WrongPerception/Action';
import OptionsRegister from './Options/OptionsRegister';
import SaveWallet from './WalletInformation/SaveIdentification';
import SavePersonalInfo from './WalletInformation/SavePersonalInfo';
import OTP from './User/OTP';
import GetOTP from './Options/GetOTP';
import InfoOTP from './Info/InfoOTP';
import Page1 from 'container/BHXH/Page1';
import Infomations from 'container/BHXH/WifeParticipatesInInsurance';
import Login from 'container/User/Login';
import NoParticipation from 'container/Search/NoParticipation';
import Time from '../container/Time';
import ForgotPW from '../container/User/forgotpw';
import ForgotInsurrance from 'container/User/forgotInsurrance';
import InsBenefit from 'container/Info/Insbenefit';
import RehabilitationManagement from 'container/Search/RehabilitationManagement';
import SearcherTheWife from 'container/Search/SearcherTheWife';
import { UIComponent } from './UI';
const AppRouter = () => {
  return (
    <Router history={history}>
      <RootContainer>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/homepage" component={HomePage} />
          <Route path="/awareness" component={Awareness} />
          <Route path="/action" component={Action} />
          <Route path="/optionsregister" component={OptionsRegister} />
          <Route path="/savewallet" component={SaveWallet} />
          <Route path="/personalinfo" component={SavePersonalInfo} />
          <Route path="/otp" component={OTP} />
          <Route path="/getOTP" component={GetOTP} />
          <Route path="/infoOTP" component={InfoOTP} />
          <Route path="/page1" component={Page1} />
          <Route path="/info" component={Infomations} />
          <Route path="/noParticipation" component={NoParticipation} />
          <Route path="/time" component={Time} />
          <Route path="/forgotpw" component={ForgotPW} />
          <Route path="/forgotinsurrance" component={ForgotInsurrance} />
          <Route path="/insbenefit" component={InsBenefit} />
          <Route path="/rehabilitation" component={RehabilitationManagement} />
          <Route path="/searcherthewife" component={SearcherTheWife} />
          <Route path="/sis-ui-components" component={UIComponent} />
        </Switch>
      </RootContainer>
    </Router>
  );
};

export default AppRouter;
