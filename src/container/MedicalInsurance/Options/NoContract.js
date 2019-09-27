// khám chữa cơ sở không kí HĐ với BHYT;

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { Buttons } from 'components/common';
import { IonButton } from '@ionic/react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class NoContract extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Khám chữa  bệnh tại cơ sở khám chữa bệnh không ký')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="cardInfo">
          <div className="btn-submit">
            <IonButton onClick={() => history.push('/understand_how_no_contract_medicalinsurance')}>
              {t('Hiểu thế nào về trường hợp này')}
            </IonButton>
          </div>
          <hr />
          <p className="text-bold ion-text-center">{t('Bạn tự  xem mình')}</p>
          <div className="btn-options">
            <Buttons
              number={1}
              click={() => history.push('/no_contract_district_medicalinsurance')}
            >
              {t('chưa ký hợp dồng với BHYT và bệnh viện tuyến Huyện')}
            </Buttons>
            <Buttons
              number={2}
              click={() => history.push('/no_contract_province_medicalinsurance')}
            >
              {t('chưa ký hợp dồng với BHYT và bệnh viện tuyến Tỉnh')}
            </Buttons>
            <Buttons number={3} click={() => history.push('/no_contract_center_medicalinsurance')}>
              {t('chưa ký hợp dồng với BHYT và bệnh viện tuyến Trung ương')}
            </Buttons>
          </div>
        </div>
      </Layout>
    );
  }
}

NoContract.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(NoContract);
