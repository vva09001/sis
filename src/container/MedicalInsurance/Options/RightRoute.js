// khám chữa đúng tuyến;

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class RightRoute extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Khám chữa bệnh đúng tuyến')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="cardInfo">
          <div className="btn-options">
            <Buttons number={1} click={() => history.push('/understand_how_medicalinsurance')}>
              {t('Hiểu thế nào là khám chữa bệnh đúng tuyến')}
            </Buttons>
            <Buttons number={2} click={() => history.push('/total_fee_medicalinsurance')}>
              {t('Tổng số tiền viện phí')}
            </Buttons>
          </div>
          <hr />
          <p className="text-bold ion-text-center">{t('Bạn tự xem mình')}</p>
          <div className="btn-options">
            <Buttons number={1} click={() => history.push('/pay100_medicalinsurance')}>
              {t('Trường hợp được bảo hiểm y tế thanh toán 100%')}
            </Buttons>
            <Buttons number={2} click={() => history.push('/pay95_medicalinsurance')}>
              {t('Trường hợp được bảo hiểm y tế thanh toán 95%')}
            </Buttons>
            <Buttons number={3} click={() => history.push('/pay80_medicalinsurance')}>
              {t('Trường hợp được bảo hiểm y tế thanh toán 80%')}
            </Buttons>
          </div>
        </div>
      </Layout>
    );
  }
}

RightRoute.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(RightRoute);
