// trường hợp mất BHYT

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class CaseLost extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Trường hợp thời điểm khám chữa bệnh, thẻ BHYT lại mất')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p>{t('Thẻ bảo hiểm y tế được cấp lại trong trường hợp bị mất')}</p>
          <p>{t('Vậy nên khi phát hiện ra việc bị mất thẻ BHYT')}</p>
          <p>{t('Ngay thời điểm bạn hoàn thành thủ tục xin cấp lại thẻ')}</p>
          <p>{t('Bạn mang giấy hẹn này cùng chứng minh thư')}</p>
        </div>
      </Layout>
    );
  }
}

CaseLost.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(CaseLost);
