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
import Register from 'container/User/Register';

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
import Mflmbenefits from './Options/Mflmbenefits';
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
import StillBirth from './Search/StillBirth';
import ImportantWork from './WalletInformation/ImportantWork';
import HealthCheck from './HealthCheck/HealthCheck';
import HealthCheckResult from './HealthCheck/HealthCheckResult';
import Menu from './Menu';
import ServiceCharge from './Info/ServiceCharge';
import Transfer from './Info/Transfer';
import MotherDiedAfterChildbirth from './Info/MotherDiedAfterChildbirth';
import AdoptedChild from './Options/AdoptedChild';
import ManagerMiscarriage from './Options/Miscarriage';
import ManagerContraception from './Options/Contraception';
import MangagerSurrogacy from './Options/Surrogacy';
import SurrogateMother from './Options/SurrogateMother';
import ThanksSurrogacy from './Options/ThanksSurrogacy';
import SickOption from './Sick/Option/index';
import SickInterest from './Sick/Option/Interest';
import SickShortDay from './Sick/Info/ShortDay';
import SickLongDay from './Sick/Info/LongDay';
import AfterSick from './Sick/Info/AfterSick';
import SickChildren from './Sick/Info/SickChildren';
import ManagerSearchSick from './Sick/Option/Search';
import SearchSickShortDay from './Sick/Search/ShortDay';
import SearchSickLongDay from './Sick/Search/LongDay';
import SearchSickRecuperate from './Sick/Search/Recuperate';
import SearchSickChildren from './Sick/Search/SickChildren';
import SickRegister from './Sick/Register';
import OccupationalDiseaseOption from './OccupationalDisease/Option';
import OccapationalDiseaseInterest from './OccupationalDisease/Option/Interest';
import LaborAccident from './OccupationalDisease/Info/LaborAccident';
import Sick from './OccupationalDisease/Info/Sick';
import AfterTheAccident from './OccupationalDisease/Info/AfterTheAccident';
import Help from './OccupationalDisease/Info/Help';
import Allowance from './OccupationalDisease/Info/Allowance';
import SearchOccupationalDisease from './OccupationalDisease/Search';
import Accident from './OccupationalDisease/Search/Accident';
import SearchSick from './OccupationalDisease/Search/Sick';
import Rehibilitate from './OccupationalDisease/Search/Rehibilitate';
import SearchHelp from './OccupationalDisease/Search/Help';
import SearchAllowance from './OccupationalDisease/Search/Allowance';
import ODRegister from './OccupationalDisease/Register';
import RegisterService from './OccupationalDisease/Register/RegisterService';
import Unemployed from './Unemployed/Options';
import UnemployedInterest from './Unemployed/Options/Interest';
import InfoUnemployed from './Unemployed/Info/Unemployed';
import Severance from './Unemployed/Info/Severance';
import LostMyJob from './Unemployed/Info/LostMyJob';
import UnemployedSearch from './Unemployed/Options/Search';
import SearchUnemployed from './Unemployed/Search/Unemployed';
import SearchSeverance from './Unemployed/Search/Severance';
import OPLostMyJob from './Unemployed/Options/LostMyJob';
import SearchLostMyJob from './Unemployed/Search/LostMyJob';
import SearchTemporary from './Unemployed/Search/Temporary';
import MenChildren from './MenChildren/Options';
import MenNoParticipate from './MenChildren/Options/NoParticipate';
import ManagerMedicalInsurance from './MedicalInsurance/Options/index';
import Check from './MedicalInsurance/Options/Check';
import Reason from './MedicalInsurance/Info/Reason';
import CheckRight from './MedicalInsurance/Options/CheckRight';
import Cases from './MedicalInsurance/Options/Cases';
import CaseLost from './MedicalInsurance/Info/CaseLost';
import CaseTorn from './MedicalInsurance/Info/CaseTorn';
import CaseOutdated from './MedicalInsurance/Info/CaseOutdated';
import CaseExpired from './MedicalInsurance/Info/CaseExpired';
import RightHave from './MedicalInsurance/Options/RightHave';
import RightRoute from './MedicalInsurance/Options/RightRoute';
import WrongRoute from './MedicalInsurance/Options/WrongRoute';
import NoContract from './MedicalInsurance/Options/NoContract';
import NoContractDistrict from './MedicalInsurance/Options/NoContractDistrict';
import NoContractProvince from './MedicalInsurance/Options/NoContractProvince';
import NoContractCenter from './MedicalInsurance/Options/NoContractCenter';
import UnderstandHow from './MedicalInsurance/Info/UnderstandHow';
import RegisterSupport from './MedicalInsurance/Info/RegisterSupport';
import Pay100 from './MedicalInsurance/Info/Pay100';
import Pay100District from './MedicalInsurance/Info/Pay100District';
import Pay100Province from './MedicalInsurance/Info/Pay100Province';
import Pay95 from './MedicalInsurance/Info/Pay95';
import Pay80 from './MedicalInsurance/Info/Pay80';
import UnderstandHowWrongRoute from './MedicalInsurance/Info/UnderstandHowWrongRoute';
import WrongRouteDistrict from './MedicalInsurance/Options/WrongRouteDistrict';
import WrongRouteProvince from './MedicalInsurance/Options/WrongRouteProvince';
import WrongRouteCenter from './MedicalInsurance/Options/WrongRouteCenter';
import UnderstandHowNoContract from './MedicalInsurance/Info/UnderstandHowNoContract';

const AppRouter = () => {
  return (
    <Router history={history}>
      <RootContainer>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
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
          <Route path="/mbenefits" component={Mflmbenefits} />
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
          <Route path="/search_stillbirth" component={StillBirth} />

          <Route path="/owneroftheWallet" component={OwnerOfTheWallet} />
          <Route path="/importantwork" component={ImportantWork} />
          <Route path="/healthcheck" component={HealthCheck} />
          <Route path="/healthcheckresult" component={HealthCheckResult} />
          <Route path="/menu" component={Menu} />
          <Route path="/servicecharge" component={ServiceCharge} />
          <Route path="/transfer" component={Transfer} />
          <Route path="/motherdieddfterchildbirth" component={MotherDiedAfterChildbirth} />
          <Route path="/adoptedchild" component={AdoptedChild} />
          <Route path="/managermiscarriage" component={ManagerMiscarriage} />
          <Route path="/contraception" component={ManagerContraception} />
          <Route path="/mangagersurrogacy" component={MangagerSurrogacy} />
          <Route path="/surrogatemother" component={SurrogateMother} />
          <Route path="/thankssurrogacy" component={ThanksSurrogacy} />

          {/* ốm đau */}
          <Route path="/sickoption" component={SickOption} />
          <Route path="/sickinterest" component={SickInterest} />
          <Route path="/managersearchsick" component={ManagerSearchSick} />
          <Route path="/sickshortday" component={SickShortDay} />
          <Route path="/sicklongDay" component={SickLongDay} />
          <Route path="/aftersick" component={AfterSick} />
          <Route path="/sickchildren" component={SickChildren} />
          <Route path="/search_sickshortday" component={SearchSickShortDay} />
          <Route path="/search_sicklongday" component={SearchSickLongDay} />
          <Route path="/search_sickrecuperate" component={SearchSickRecuperate} />
          <Route path="/search_sickchildren" component={SearchSickChildren} />
          <Route path="/sickregister" component={SickRegister} />

          {/* bệnh nghề nghiệp */}
          <Route path="/occupationaldiseaseoption" component={OccupationalDiseaseOption} />
          <Route path="/occapationaldiseaseinterest" component={OccapationalDiseaseInterest} />
          <Route path="/laboraccident" component={LaborAccident} />
          <Route path="/occupationaldiseasesick" component={Sick} />
          <Route path="/aftertheaccident" component={AfterTheAccident} />
          <Route path="/help" component={Help} />
          <Route path="/allowance" component={Allowance} />
          <Route path="/searchoccupationaldisease" component={SearchOccupationalDisease} />
          <Route path="/search_accident" component={Accident} />
          <Route path="/search_sick" component={SearchSick} />
          <Route path="/search_rehibilitate" component={Rehibilitate} />
          <Route path="/search_help" component={SearchHelp} />
          <Route path="/search_allowance" component={SearchAllowance} />
          <Route path="/odregister" component={ODRegister} />
          <Route path="/register_service" component={RegisterService} />

          {/* thất nghiệp */}

          <Route path="/unemployed" component={Unemployed} />
          <Route path="/unemployed_interest" component={UnemployedInterest} />
          <Route path="/info_unemployed" component={InfoUnemployed} />
          <Route path="/info_severance" component={Severance} />
          <Route path="/info_lostmyjob" component={LostMyJob} />
          <Route path="/unemployed_search" component={UnemployedSearch} />
          <Route path="/search_unemployed" component={SearchUnemployed} />
          <Route path="/search_severance" component={SearchSeverance} />
          <Route path="/unemployed_lostmyjob" component={OPLostMyJob} />
          <Route path="/search_lostmyJob" component={SearchLostMyJob} />
          <Route path="/search_temporary" component={SearchTemporary} />

          {/* Nam giới có vợ sinh con */}
          <Route path="/menchildren" component={MenChildren} />
          <Route path="/menchildren_noparticipate" component={MenNoParticipate} />

          {/* BHYT */}
          <Route path="/manager_medicalinsurance" component={ManagerMedicalInsurance} />
          <Route path="/check_medicalinsurance" component={Check} />
          <Route path="/reason_medicalinsurance" component={Reason} />
          <Route path="/check_right_medicalinsurance" component={CheckRight} />
          <Route path="/cases_medicalinsurance" component={Cases} />
          <Route path="/case_lost_medicalinsurance" component={CaseLost} />
          <Route path="/case_torn_medicalinsurance" component={CaseTorn} />
          <Route path="/case_outdated_medicalinsurance" component={CaseOutdated} />
          <Route path="/case_expired_medicalinsurance" component={CaseExpired} />
          <Route path="/right_have_medicalinsurance" component={RightHave} />
          <Route path="/right_route_medicalinsurance" component={RightRoute} />
          <Route path="/wrong_route_medicalinsurance" component={WrongRoute} />
          <Route path="/no_contract_medicalinsurance" component={NoContract} />
          <Route path="/no_contract_district_medicalinsurance" component={NoContractDistrict} />
          <Route path="/no_contract_province_medicalinsurance" component={NoContractProvince} />
          <Route path="/no_contract_center_medicalinsurance" component={NoContractCenter} />
          <Route path="/wrong_route_district_medicalinsurance" component={WrongRouteDistrict} />
          <Route path="/wrong_route_province_medicalinsurance" component={WrongRouteProvince} />
          <Route path="/wrong_route_center_medicalinsurance" component={WrongRouteCenter} />
          <Route path="/understand_how_medicalinsurance" component={UnderstandHow} />
          <Route path="/register_support_medicalinsurance" component={RegisterSupport} />
          <Route path="/pay100_medicalinsurance" component={Pay100} />
          <Route path="/pay100_district_medicalinsurance" component={Pay100District} />
          <Route path="/pay100_province_medicalinsurance" component={Pay100Province} />
          <Route path="/pay95_medicalinsurance" component={Pay95} />
          <Route path="/pay80_medicalinsurance" component={Pay80} />
          <Route path="/understand_how_wrong_route_medicalinsurance" component={UnderstandHowWrongRoute} />
          <Route path="/understand_how_no_contract_medicalinsurance" component={UnderstandHowNoContract} />
        </Switch>
      </RootContainer>
    </Router>
  );
};

export default AppRouter;
