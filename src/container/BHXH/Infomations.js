import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class Infomations extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('pageTitle_02')}
        btnColor="primary"
        to="/search_noParticipation"
        btnName="Thoát"
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
Infomations.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(Infomations);
