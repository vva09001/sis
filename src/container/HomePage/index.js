import React, { Component } from 'react';
import { IonContent, IonButton } from '@ionic/react';
import Header from 'container/Common/Header';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class HomePage extends Component {
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
              <Link to="awareness">
                <IonButton>{t('continue')}</IonButton>
              </Link>
            </div>
          </div>
        </IonContent>
      </div>
    );
  }
}
HomePage.propTypes = {
  t: PropTypes.func,
  fullName: PropTypes.string
};

const mapSateToProps = state => {
  return {
    fullName: state.user.profile.fullname
  };
};
export default connect(
  mapSateToProps,
  null
)(withTranslation()(HomePage));
