// hiểu thế nào trong TH này

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class UnderstandHowNoContract extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Thế nào là cơ sở khám chữa bệnh không ký')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p>{t('Một cơ sở khám chữa bẹnh')}</p>
          <p>{t('BHYT có ký được hợp đồng')}</p>
          <p>{t('Trường hợp NLĐ buộc vẫn')}</p>
        </div>
      </Layout>
    );
  }
}

UnderstandHowNoContract.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(UnderstandHowNoContract);
