// trường hợp hết hạn BHYT

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class CaseExpired extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t(
          'Trường hợp đang trong thời gian điều trị bệnh (nội ngoại trú), thẻ BHYT lại bị hết hạn'
        )}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p>{t('Bảo hiểm xã hội Việt Nam  đã ban hành')}</p>
          <p>{t('Đối với các đối tượng tham gia BHYT')}</p>
        </div>
      </Layout>
    );
  }
}

CaseExpired.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(CaseExpired);
