// đăng ký dịch vụ

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import { IonButton } from '@ionic/react';
import PropTypes from 'prop-types';
import history from 'utils/history';

class RegisterService extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title="Tìm hiểu quyền lợi BHXH  Dưỡng sức phục hồi sức khỏe sau  tai nạn lao động, bệnh nghề nghiệp"
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p className="text-blue text-bold">
            {t('Liệu có cần dịch vụ hỗ trợ, hướng dẫn thủ tục BHXH này hay không')}
          </p>
          <p>
            {t('Kiến thức')} <br />
            {t('Nhưng có thế')}
            <br />
            {t('Vậy chỉ còn cách')}
          </p>
          <p>
            {t('Với dịch vụ thử tục này')} <br />
          </p>
          <p className="text-blue text-bold">{t('Phí dịch vụ hỗ trợ thủ tục này là 50.000 VNĐ')}</p>
          <div className="btn-comfirm">
            <IonButton>{t('Đồng ý')}</IonButton>
          </div>
        </div>
      </Layout>
    );
  }
}

RegisterService.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(RegisterService);
