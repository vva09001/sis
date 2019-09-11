// tiefm hiểu quyefn lợi mất việc

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class LostMyJob extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title="Tìm hiểu quyền lợi BHXH Trợ cấp mất việc làm"
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p className="text-blue text-bold">{t('Hiểu thế nào về trợ cấp mất việc làm')}</p>
          <p>{t('Khoản trợ cấp do nghỉ việc')}</p>
          <p>{t('Khoản trợ cấp này do Doanh nghiệp trả ')}</p>
          <p>{t('Thời gian tính trợ cấp mất việc làm cho NLĐ ')}</p>
          <p>{t('Điều kiện được hưởng trợ cấp mất việc làm ')}</p>
          <p>{t('Mức hưởng trợ cấp mất việc làm')}</p>
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

LostMyJob.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(LostMyJob);
