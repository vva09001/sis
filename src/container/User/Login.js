import React, { Component } from 'react';
import Authpage from 'container/Layout/Authpage';
import { IonCardContent, IonInput, IonButton } from '@ionic/react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    const { t } = this.props;
    return (
      <Authpage>
        <img src="img/user.png" alt="icon_user" />
        <div className="header">
          <h1>{t('login')}</h1>
        </div>
        <IonCardContent>
          <div className="phone">
            <IonInput placeholder={t('phoneNumber')} />
          </div>
          <div className="user">
            <IonInput placeholder={t('fullName')} />
          </div>
          <div className="pass">
            <IonInput placeholder={t('password')} />
          </div>
          <div className="btn-login">
            <Link to="homepage">
              <IonButton>{t('login')}</IonButton>
            </Link>
          </div>
          <div className="register">
            <IonButton class="btn-register">{t('register')}</IonButton>
            <IonButton class="btn-pass">{t('forgotPassword')}</IonButton>
          </div>
        </IonCardContent>
      </Authpage>
    );
  }
}
HomePage.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(HomePage);
