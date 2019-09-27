// khám chữa cơ sở không kí HĐ với BHYT bv huyện;

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class NoContractDistrict extends Component {
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
          <p>{t('0,15 mức lương cơ sở tại thời diểm khám bệnh chữa bệnh')}</p>
          <p>{t('0.5 mức lương cơ sở tại thời điểm ra viện')}</p>
          <p>
            <em>{t('Cả hai trường hợp này đều trừ trường hợp cấp cứu')}</em>
          </p>
        </div>
      </Layout>
    );
  }
}

NoContractDistrict.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(NoContractDistrict);
