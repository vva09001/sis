import React, { Component } from 'react';
import Layout from '../Layout/LayoutOptions';
import { IonInput, IonButton } from '@ionic/react';
import history from 'utils/history';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
class OTP extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout title={t('Lưu số điện thoại đã đăng kí nhận mã tra cứu OTP')}>
        <div className="text-box">
          {t('Trường hợp bạn đã có số điện thoại đăng ký với BHXH để nhận mã tra cứu OTP')}
        </div>
        <div className="input-phone">
          <div className="input">
            <IonInput placeholder="Nhập sđt đã đăng kí BHXH" inputmode="numeric" />
          </div>
          <IonButton>{t('save_Infon')}</IonButton>
        </div>
        <div className="text-box">
          {t(
            'Trường hợp nếu bạn chưa hiểu, chưa đăng ký với cơ quan BHXH số điện thoại nhận mã tra cứu OTP'
          )}
        </div>
        <div className="btn-find">
          <IonButton>
            <Link to="/getOTP">{t('looking_for_more_information')}</Link>
          </IonButton>
        </div>
        <div className="btn-back">
          <IonButton color="light" onClick={() => history.goBack()}>
            {t('back')}
          </IonButton>
        </div>
      </Layout>
    );
  }
}

OTP.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(OTP);
