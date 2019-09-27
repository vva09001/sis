// hiểu thế nào là

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import { IonButton } from '@ionic/react';
import PropTypes from 'prop-types';
import history from 'utils/history';

class UnderstandHow extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Hiểu thế nào là khám chữa bệnh đúng tuyến')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p>{t('Khám chữa bệnh đúng tuyến là')}</p>
          <p>{t('Cơ sở khám chữa bệnh này')}</p>
          <p>{t('Việc ghi tên cơ sở khám chữa bệnh ban đầu')}</p>
          <p>{t('Nhưng vì có trường hợp, chuyển nơi công tác')}</p>
          <p>{t('Bạn cần thay đổi thông tin cơ sở khám chữa bệnh ban đầu')}</p>
          <p>{t('Thông tin quan trọng nhất bạn cần biết')}</p>
          <div className="btn-submit">
            <IonButton onClick={() => history.push('/register_support_medicalinsurance')}>
              <p>{t('Đăng kí hỗ trợ thủ tục')}</p>
            </IonButton>
          </div>
        </div>
      </Layout>
    );
  }
}

UnderstandHow.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(UnderstandHow);
