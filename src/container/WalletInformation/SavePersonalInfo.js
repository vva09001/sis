import React, { Component } from 'react';
import Layout from '../Layout/LayoutButtons';
import { IonInput, IonButton } from '@ionic/react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
class SavePersonalInfo extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('save_info')}
        sussget={t(
          'Hàng tháng, Ví sẽ gửi báo cáo quản lý BHXH cho bạn thông qua  mail hoặc Zalo của bạn, vậy nên bạn đăng ký với Ví một địa chỉ mail, hoặc zalo, hoặc cả hai cho chắc chắn mình luôn nhận được báo cáo.'
        )}
        btnColor="light"
        btnName={t('back')}
        to="optionsregister"
      >
        <div className="from-peson">
          <div className="phone">
            <IonInput placeholder="Họ và tên (có dấu)" />
          </div>
          <div className="user marginbottom">
            <IonInput placeholder="Giới tính" />
          </div>
          <div className="pass marginbottom">
            <IonInput placeholder="Ngày tháng năm sinh" />
          </div>
          <div className="user marginbottom">
            <IonInput placeholder="CMND/ Thẻ căn cước" />
          </div>
          <div className="pass marginbottom">
            <IonInput placeholder="Địa chỉ email" />
          </div>
          <div className="user-bootom">
            <IonInput placeholder="Số điện thoại Zalo" />
          </div>
        </div>
        <div className="btn-submit">
          <IonButton>{t('finish')}</IonButton>
        </div>
      </Layout>
    );
  }
}

SavePersonalInfo.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(SavePersonalInfo);
