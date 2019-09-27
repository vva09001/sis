// các trường hợp BHYT;

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class Cases extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Các trường hợp xảy ra')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="btn-options">
          <Buttons number={1} click={() => history.push('/case_lost_medicalinsurance')}>
            {t('Trường hợp thời điểm khám chữa bệnh, thẻ BHYT lại mất')}
          </Buttons>
          <Buttons number={2} click={() => history.push('/case_torn_medicalinsurance')}>
            {t('Trường hợp thời điểm khám chữa bệnh, thẻ BHYT lại bị rách, không còn nguyên vẹn')}
          </Buttons>
          <Buttons number={3} click={() => history.push('/case_outdated_medicalinsurance')}>
            {t('Trường hợp thời điểm khám chữa bệnh, thẻ BHYT đã quá hạn trước đó một thời gian')}
          </Buttons>
          <Buttons number={4} click={() => history.push('/case_expired_medicalinsurance')}>
            {t(
              'Trường hợp đang trong thời gian điều trị bệnh (nội ngoại trú), thẻ BHYT lại bị hết hạn'
            )}
          </Buttons>
        </div>
      </Layout>
    );
  }
}

Cases.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(Cases);
