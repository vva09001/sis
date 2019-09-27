// trường hợp quá hạn BHYT

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class CaseOutdated extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Trường hợp thời điểm khám chữa bệnh, thẻ BHYT đã quá hạn trước đó một thời gian')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p>{t('Nguyên tắc DN')}</p>
          <p>{t('Trường hợp này do lỗi của DN')}</p>
          <p>{t('Theo quy dịnh pháp luật  thì DN')}</p>
          <p>{t('Đến khi nào bạn đã nhận dược thẻ BHYT')}</p>
          <p>{t('Khoảng thời gian bắt đầu phát sinh khám chữa bệnh')}</p>
          <p>{t('Mọi trường hợp trốn tránh trách nhiẹm của DN')}</p>
        </div>
      </Layout>
    );
  }
}

CaseOutdated.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(CaseOutdated);
