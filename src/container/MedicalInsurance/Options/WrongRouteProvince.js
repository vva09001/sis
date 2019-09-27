// khám chữa trái tuyến tỉnh;

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { IonButton } from '@ionic/react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class WrongRouteProvince extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Khám chữa bệnh trái tuyến tại tuyến bệnh viện Tỉnh')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="cardInfo">
          <p>{t('Bạn khám chữa bệnh trái tuyến, vượt tuyến tại bệnh viện  tỉnh')}</p>
          <p>{t('Nghĩa là Bạn xem mình thuộc trường hợp nào')}</p>
          <div className="btn-submit">
            <IonButton onClick={() => history.push('/pay100_province_medicalinsurance')}>
              <p>{t('Trường hợp được bảo hiểm y tế thanh toán 100%')}</p>
            </IonButton>
          </div>
          <div className="btn-submit">
            <IonButton onClick={() => history.push('/pay95_medicalinsurance')}>
              <p>{t('Trường hợp được bảo hiểm y tế thanh toán 95%')}</p>
            </IonButton>
          </div>
          <div className="btn-submit">
            <IonButton onClick={() => history.push('/pay80_medicalinsurance')}>
              <p>{t('Trường hợp được bảo hiểm y tế thanh toán 80%')}</p>
            </IonButton>
          </div>
          <div className="btn-submit">
            <IonButton onClick={() => history.push('/wrong_route_emergency_medicalinsurance')}>
              <p>{t('Trường hợp cấp cứu tại cơ sở khám chữa bệnh tái tuyến, vượt tuyến')}</p>
            </IonButton>
          </div>
        </div>
      </Layout>
    );
  }
}

WrongRouteProvince.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(WrongRouteProvince);
