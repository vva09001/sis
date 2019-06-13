import React, { Component } from 'react';
import { IonContent, IonButton } from '@ionic/react';
import Header from 'container/Common/Header';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
class HomePage extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="homePage">
        <IonContent>
          <div className="header">
            <Header title={t('pageTitle_03')} />
          </div>
          <div className="content">
            <div className="header-title">
              <h1>{t('wellcome')}</h1>
            </div>
            <div className="img">
              <img src="img/user.png" alt="icon_user" />
              <h5>Trần Hoài Bác</h5>
            </div>
            <div className="btn">
              <Link to="page1">
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
  t: PropTypes.func
};
export default withTranslation()(HomePage);
