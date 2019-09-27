// khám chữa trái tuyến trung ương;

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { IonButton } from '@ionic/react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class WrongRouteCenter extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Khám chữa bệnh trái tuyến tại tuyến bệnh viện Trung ương')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="cardInfo">
          <p>{t('Bạn khám chữa bệnh trái tuyến, vượt tuyến tại bệnh viện Trung ương')}</p>
          <p>{t('Nghĩa là Bạn xem mình thuộc trường hợp nào')}</p>
          <div className="btn-submit">
            <IonButton onClick={() => history.push('/pay100_medicalinsurance')}>
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
        </div>
      </Layout>
    );
  }
}

WrongRouteCenter.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(WrongRouteCenter);
