// khám chữa cơ sở không kí HĐ với BHYT bv tỉnh;

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class NoContractProvince extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Quyền lợi của Bạn  được BHYT')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="cardInfo">
          <p>{t('1.0 mức lương cơ sở tại thời điểm ra viện')}</p>
          <p>
            <em>{t('Quy định không tính')}</em>
          </p>
        </div>
      </Layout>
    );
  }
}

NoContractProvince.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(NoContractProvince);
