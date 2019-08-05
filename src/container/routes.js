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
import Infomations from './Info/WifeParticipatesInInsurance';
import Login from 'container/User/Login';
import NoParticipation from 'container/Search/NoParticipation';
import Time from '../container/Time';
import ForgotPW from '../container/User/forgotpw';
import ForgotInsurrance from 'container/User/forgotInsurrance';
import InsBenefit from 'container/Info/Insbenefit';
import RehabilitationManagement from 'container/Search/RehabilitationManagement';
// thông tin
import SearcherTheWife from 'container/Search/SearcherTheWife';
import MenWithWivesGiveBirth from './Info/MenWithWivesGiveBirth';
import RehabilitationService from './Info/RehabilitationService';
import WifeDoesNotParticipate from './Info/WifeDoesNotParticipate';
import WifeParticipate from './Info/WifeParticipate';
import WorkBeforetheEndOfMaternityLeave from './Info/WorkBeforetheEndOfMaternityLeave';
import LearnRestorative from './Info/LearnRestorative';
import Miscarriage from './Info/Miscarriage';
import Adopted from './Info/Adopted';
import Childbirth from './Info/Childbirth';
import PregnancyExamination from './Info/PregnancyExamination';
import Contraceptive from './Info/Contraceptive';
import BirthBenefits from './Info/BirthBenefits';
import ThankSurrogacy from './Info/ThankSurrogacy';
import Surrogacy from './Info/Surrogacy';
import ManagementOfMiscarriage from './Info/ManagementOfMiscarriage';
import AdoptedManagement from './Info/AdoptedManagement';
import PregnancyExaminationManagement from './Info/PregnancyExaminationManagement';
import ContraceptiveManagement from './Info/ContraceptiveManagement';
//DKDV
import DKChildbirth from './Options/DKChildbirth';
import DKSurrogacy from './Options/DKSurrogacy';
import WifeJoinBHXH from './Options/WifeJoinBHXH';
import WifeNotParticipating from './Options/WifeNotParticipating';
import WifeGivingBirthManagement from './Options/WifeGivingBirthManagement';
import RehabilitationBenefits from './Options/RehabilitationBenefits';
import MaleParticipation from './Options/MaleParticipation';
import MaleJoinParticipation from './Options/MaleJoinParticipation';
import MaternityCase from './Options/MaternityCase';
import Maternitybenefits from './Options/Maternitybenefits';
import RegistrationProcedure from './Options/RegistrationProcedure';
import RegistrationProcedure2 from './Options/RegistrationProcedure2';
import RegistrationProcedure3 from './Options/RegistrationProcedure3';
import NotKnowledgeable from './Options/NotKnowledgeable';
import NotKnowledgeable6 from './Options/NotKnowledgeable6';
import NotKnowledgeable3 from './Options/NotKnowledgeable3';
import NotKnowledgeable7 from './Options/NotKnowledgeable7';
import NotKnowledgeable4 from './Options/NotKnowledgeable4';
import NotKnowledgeable5 from './Options/NotKnowledgeable5';
import NotKnowledgeable8 from './Options/NotKnowledgeable8';
import NotKnowledgeable9 from './Options/NotKnowledgeable9';
import NotKnowledgeable10 from './Options/NotKnowledgeable10';
import ProcessParticipation from './Options/ProcessParticipation';
import AntenatalCareBenefits from './Options/AntenatalCareBenefits';
//Search
import SearchMen from './Search/SearchMen';
import ChildDiesAfterBirth from './Search/ChildDiesAfterBirth';
import SearcherTheMale from './Search/SearcherTheMale';
import AdoptionBenefits from './Search/AdoptionBenefits';
import SearchPregnancyExamination from './Search/PregnancyExamination';
import Contraception from './Search/Contraception';
import SearchMiscarriage from './Search/Miscarriage';
import SearchSurrogacy from './Search/Surrogacy';
import SearchThankSurrogacy from './Search/ThankSurrogacy';
import SpecialCase from './Search/SpecialCase';
import NormalChildbirth from './Search/NormalChildbirth';
import LeaveEarlierThanIndicated from './Search/LeaveEarlierThanIndicated';
import OwnerOfTheWallet from './WalletInformation/OwnerOfTheWallet';
import ImportantWork from './WalletInformation/ImportantWork';
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
          <Route path="/time" component={Time} />
          <Route path="/forgotpw" component={ForgotPW} />
          <Route path="/forgotinsurrance" component={ForgotInsurrance} />
          <Route path="/menWithwivesgivebirth" component={MenWithWivesGiveBirth} />
          <Route path="/rehabilitationservice" component={RehabilitationService} />
          <Route path="/wifedoesnotparticipate" component={WifeDoesNotParticipate} />
          <Route path="/wifeparticipate" component={WifeParticipate} />
          <Route path="/workbeforematernityleave" component={WorkBeforetheEndOfMaternityLeave} />
          <Route path="/learnrestorative" component={LearnRestorative} />
          <Route path="/miscarriage" component={Miscarriage} />
          <Route path="/adopted" component={Adopted} />
          <Route path="/childbirth" component={Childbirth} />
          <Route path="/pregnancyexamination" component={PregnancyExamination} />
          <Route path="/contraceptive" component={Contraceptive} />
          <Route path="/birthbenefits" component={BirthBenefits} />
          <Route path="/thanksurrogacy" component={ThankSurrogacy} />
          <Route path="/surrogacy" component={Surrogacy} />
          <Route path="/managementmiscarriage" component={ManagementOfMiscarriage} />
          <Route path="/adoptedmanagement" component={AdoptedManagement} />
          <Route
            path="/pregnancyexaminationmanagement"
            component={PregnancyExaminationManagement}
          />
          <Route path="/contraceptivemanagement" component={ContraceptiveManagement} />
          <Route path="/register_childbirth" component={DKChildbirth} />
          <Route path="/register_surrogacy" component={DKSurrogacy} />
          <Route path="/options_wifejoin" component={WifeJoinBHXH} />
          <Route path="/options_wifenotparticipating" component={WifeNotParticipating} />
          <Route
            path="/management_wifegivingbirthmanagement"
            component={WifeGivingBirthManagement}
          />
          <Route path="/rehabilitationbenefits" component={RehabilitationBenefits} />
          <Route path="/maleparticipation" component={MaleParticipation} />
          <Route path="/malejoinparticipation" component={MaleJoinParticipation} />
          <Route path="/maternitycase" component={MaternityCase} />
          <Route path="/maternitybenefits" component={Maternitybenefits} />
          <Route path="/registrationprocedure" component={RegistrationProcedure} />
          <Route path="/registrationprocedure2" component={RegistrationProcedure2} />
          <Route path="/registrationprocedure3" component={RegistrationProcedure3} />
          <Route path="/notknowledgeable" component={NotKnowledgeable} />
          <Route path="/notknowledgeable6" component={NotKnowledgeable6} />
          <Route path="/notknowledgeable3" component={NotKnowledgeable3} />
          <Route path="/notknowledgeable7" component={NotKnowledgeable7} />
          <Route path="/notknowledgeable4" component={NotKnowledgeable4} />
          <Route path="/notknowledgeable5" component={NotKnowledgeable5} />
          <Route path="/notknowledgeable8" component={NotKnowledgeable8} />
          <Route path="/notknowledgeable9" component={NotKnowledgeable9} />
          <Route path="/notknowledgeable10" component={NotKnowledgeable10} />
          <Route path="/processparticipation" component={ProcessParticipation} />
          <Route path="/antenatalcarebenefits" component={AntenatalCareBenefits} />
          {/* search */}
          <Route path="/search_noParticipation" component={NoParticipation} />
          <Route path="/search_insbenefit" component={InsBenefit} />
          <Route path="/search_thewife" component={SearcherTheWife} />
          <Route path="/search_themale" component={SearcherTheMale} />
          <Route path="/search_apparel" component={RehabilitationManagement} />
          <Route path="/search_searchMen" component={SearchMen} />
          <Route path="/search_childdiesafterbirth" component={ChildDiesAfterBirth} />
          <Route path="/search_adoptionbenefits" component={AdoptionBenefits} />
          <Route path="/search_pregnancyexamination" component={SearchPregnancyExamination} />
          <Route path="/search_contraception" component={Contraception} />
          <Route path="/search_miscarriage" component={SearchMiscarriage} />
          <Route path="/search_searchsurrogacy" component={SearchSurrogacy} />
          <Route path="/search_thanksurrogacy" component={SearchThankSurrogacy} />
          <Route path="/search_specialcase" component={SpecialCase} />
          <Route path="/search_normalchildbirth" component={NormalChildbirth} />
          <Route path="/search_leaveearlierthanindicated" component={LeaveEarlierThanIndicated} />

          <Route path="/owneroftheWallet" component={OwnerOfTheWallet} />
          <Route path="/importantwork" component={ImportantWork} />
        </Switch>
      </RootContainer>
    </Router>
  );
};

export default AppRouter;
