// đăng kí hỗ trợ

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import { IonButton } from '@ionic/react';
import PropTypes from 'prop-types';
import history from 'utils/history';

class RegisterSupport extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Đăng kí hỗ trợ thủ tục')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p className="text-blue text-bold">{t('Liệu có cần')}</p>
          <p>{t('- Kiến thức')}</p>
          <p>{t('Nhưng có thể có các trường hợp')}</p>
          <p>{t('Vậy chỉ còn cách')}</p>
          <p>{t('- Với dịch vụ thủ tục này')}</p>
          <p className="text-blue text-bold">{t('Phí dịch vụ hỗ trợ thủ tục này là 50.000 VNĐ')}</p>
          <div className="btn-submit">
            <IonButton onClick={() => history.push('/register_support_medicalinsurance')}>
              <p>{t('agree')}</p>
            </IonButton>
          </div>
        </div>
      </Layout>
    );
  }
}

RegisterSupport.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(RegisterSupport);
