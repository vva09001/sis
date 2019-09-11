// tiefm hiểu quyền lợi thôi việc

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class Severance extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title="Tìm hiểu quyền lợi BHXH Trợ cấp thôi việc"
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p className="text-blue text-bold">{t('Hiểu thế nào về trợ cấp thôi việc')}</p>
          <p>{t('Khoản trợ cấp do')}</p>
          <p>{t('Nguyên do từ phía người lao động')}</p>
          <p>{t('Nguyên do từ phía Doanh nghiệp')}</p>
          <p>{t('Nguyên do hai bên thỏa thuận')}</p>
          <p>{t('Mức hưởng trợ cấp thôi việc')}</p>
          <p>{t('Trừ các trường hợp')}</p>
          <p className="text-blue text-bold">
            {t('Quy định về thời gian chi trả trợ cấp thôi việc')}
          </p>
          <p>{t('Trong thời gian 7 ngày làm việc')}</p>
          <p>{t('Trường hợp DN (đơn vị) không đóng BHXH')}</p>
        </div>
      </Layout>
    );
  }
}

Severance.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(Severance);
