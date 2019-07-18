import React, { Component } from 'react';
import Layout from '../Layout/LayoutButtons';
import { IonButton, IonInput } from '@ionic/react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';
class SaveWallet extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Thông tin định danh Ví')}
        sussget={t(
          'Thông tin số điện thoại đăng nhập và mật khẩu khi bạn cần sửa lại, sẽ có phần chỉnh sửa thông tin ở cuối cùng của Ví'
        )}
        btnColor="light"
        btnName={t('back')}
        _onClick={() => history.goBack()}
      >
        <div className="form">
          <div className="text-box">
            <div className="input-custom">
              <IonInput inputmode="numeric" placeholder="Mã số BHXH của bạn" />
            </div>
            <div className="btn-save">
              <IonButton color="warning">{t('save')}</IonButton>
            </div>
            <div className="btn-forget">
              <IonButton>
                <Link to="/forgotinsurrance">{t('forgot_code')}</Link>
              </IonButton>
            </div>
          </div>
          <div className="text-box">
            <div className="input-custom">
              <IonInput inputmode="numeric" placeholder="Số điện thoại của bạn" />
            </div>
            <div className="btn-save">
              <IonButton color="warning">{t('save')}</IonButton>
            </div>
          </div>
          <div className="text-box">
            <div className="input-custom">
              <IonInput placeholder="Mật khẩu sử dụng" />
            </div>
            <div className="btn-save">
              <IonButton color="warning">{t('save')}</IonButton>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

SaveWallet.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(SaveWallet);
