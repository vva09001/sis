//DKBHXH con nuôi
import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class Adopted extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Đăng ký dịch vụ thủ tục BHXH con nuôi')}
        btnColor="primary"
        to="/noParticipation"
        btnName={t('continue')}
      >
        <div className="cardInfo">
          <p>{t('info_01')}</p>
          <p>{t('info_02')}</p>
          <p>{t('info_03')}</p>
        </div>
      </Layout>
    );
  }
}
Adopted.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(Adopted);
