// khám chữa trái tuyến huyện;

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { IonButton } from '@ionic/react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class WrongRouteDistrict extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Quyền lợi BHYT - Khám bệnh, chữa bệnh có thẻ BHYT')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="cardInfo">
          <p>{t('Tuy là trái tuyến')}</p>
          <p>{t('Bạn thuộc trường hợp nào thì')}</p>
          <div className="btn-submit">
            <IonButton onClick={() => history.push('/pay100_district_medicalinsurance')}>
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

WrongRouteDistrict.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(WrongRouteDistrict);
