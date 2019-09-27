// khám chữa trái tuyến;

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { IonInput } from '@ionic/react';
import { Buttons } from 'components/common';
import { IonButton } from '@ionic/react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class WrongRoute extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Khám chữa bệnh trái tuyến vượt tuyến')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="cardInfo">
          <div className="btn-submit">
            <IonButton onClick={() => history.push('/understand_how_wrong_route_medicalinsurance')}>
              {t('Hiểu thế nào là khám chữa bệnh trái tuyến')}
            </IonButton>
          </div>
          <hr />
          <div className="form">
            <p className="text-blue text-bold">{'Tổng số tiền viện phí'}</p>
            <div className="input-sick">
              <p>
                {'Tiền khám bệnh và điều trị ngoại trú'}
                <IonInput placeholder="VNĐ" type="number" />
              </p>
            </div>
            <div className="input-sick">
              <p>
                {'Tiền điều trị nội trú'} <IonInput placeholder="VNĐ" type="number" />
              </p>
            </div>
          </div>
          <hr />
          <p className="text-bold ion-text-center">{t('Bạn khám chữa bệnh trái tuyến tại')}</p>
          <div className="btn-options">
            <Buttons
              number={1}
              click={() => history.push('/wrong_route_district_medicalinsurance')}
            >
              {t('Khám chữa bệnh trái tuyến tại tuyến bệnh viện Huyện')}
            </Buttons>
            <Buttons
              number={2}
              click={() => history.push('/wrong_route_province_medicalinsurance')}
            >
              {t('Khám chữa bệnh trái tuyến tại tuyến bệnh viện Tỉnh')}
            </Buttons>
            <Buttons number={3} click={() => history.push('/wrong_route_center_medicalinsurance')}>
              {t('Khám chữa bệnh trái tuyến tại tuyến bệnh viện Trung ương')}
            </Buttons>
          </div>
        </div>
      </Layout>
    );
  }
}

WrongRoute.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(WrongRoute);
