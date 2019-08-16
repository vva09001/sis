import React, { Component } from 'react';
import { IonContent, IonButton } from '@ionic/react';
import Header from 'container/Common/Header';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';
import { connect } from 'react-redux';
import actions from '../../store/user/actions';

class HomePage extends Component {
  logout = () => {
    localStorage.removeItem('persist:root');
    this.props.logout();
    history.push('/');
  };

  render() {
    const { t } = this.props;
    return (
      <div className="homePage">
        <IonContent>
          <Header title={t('pageTitle_03')} />
          <div className="content">
            <div className="header-title">
              <h1>{t('wellcome')}</h1>
            </div>
            <div className="img">
              <img src="img/user.png" alt="icon_user" />
              <h5>{this.props.fullName}</h5>
            </div>
            <div className="btn">
              <IonButton onClick={() => history.push('/awareness')}>{t('continue')}</IonButton>
            </div>
          </div>
          <div className="btn-logout">
            <IonButton color="light" onClick={this.logout}>
              {t('logout')}
            </IonButton>
          </div>
        </IonContent>
      </div>
    );
  }
}
HomePage.propTypes = {
  t: PropTypes.func,
  fullName: PropTypes.string,
  logout: PropTypes.func
};

const mapSateToProps = state => {
  return {
    fullName: state.user.profile.fullname
  };
};

const mapDispatchToProps = {
  logout: actions.logout
};
export default connect(
  mapSateToProps,
  mapDispatchToProps
)(withTranslation()(HomePage));
