// trường hợp rách BHYT

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class CaseTorn extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Trường hợp thời điểm khám chữa bệnh, thẻ BHYT lại bị rách, không còn nguyên vẹn')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p>{t('Thẻ bảo hiểm y tế được đổi')}</p>
          <p>{t('Hiện nay, pháp luật không có quy định')}</p>
          <p>{t('Vậy nên khi bạn có nhu cầu đổi lại thẻ')}</p>
          <p>{t('Ngay thời điểm bạn hoàn thành thủ tục')}</p>
          <p>{t('Bạn mang giấy hẹn này cùng chứng minh thư')}</p>
        </div>
      </Layout>
    );
  }
}

CaseTorn.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(CaseTorn);
