import React, { Component } from 'react';
import Authpage from 'container/Layout/Authpage';
import { IonCard, IonCardHeader, IonCardContent, IonInput, IonButton } from '@ionic/react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class HomePage extends Component {
  render() {
    const { t } = this.props;
    return (
      <Authpage>
        <IonCard>
          <img src="img/user.png" alt="icon_user" />
          <IonCardHeader>{t('login')}</IonCardHeader>
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
          </IonCardContent>
          <div className="btn-login">
            <IonButton onClick={this.login}>
              <Link to="bhxh">{t('login')}</Link>
            </IonButton>
          </div>
          <div className="register">
            <IonButton class="btn-register">{t('register')}</IonButton>
            <IonButton class="btn-pass">{t('forgotPassword')}</IonButton>
          </div>
        </IonCard>
      </Authpage>
    );
  }
}
HomePage.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(HomePage);
