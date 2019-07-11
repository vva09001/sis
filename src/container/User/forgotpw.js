import React, { Component } from 'react';
import AuthPage from '../Layout/Authpage';
import { IonButton } from '@ionic/react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
class ForgotPW extends Component {
  render() {
    const { t } = this.props;
    return (
      <AuthPage>
        <div className="forgotpw-wrap">
          <img src="img/user.png" alt="icon_user" className="img-login" />
          <div className="content">
            <h2>{t('you_forgot_password')}</h2>
            <p>
              {t('Ví sẽ gửi vào mail, zalo của bạn')}
              <br /> {t('mật khẩu bạn đã đăng ký với Ví')}
            </p>
            <div className="btn-getpw">
              <IonButton>
                {t('Nhận lại mật khẩu')} <br />
                {t('đã đăng ký')}
              </IonButton>
            </div>
            <div className="btn-login">
              <IonButton color="light">{t('login')}</IonButton>
            </div>
          </div>
        </div>
      </AuthPage>
    );
  }
}

ForgotPW.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(ForgotPW);
