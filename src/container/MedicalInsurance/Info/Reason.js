// vì lý do

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class Reason extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title="Vì lý do !"
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p>{t('Vì lý do BHYT')}</p>
          <p>{t('Vì BHYT')}</p>
        </div>
      </Layout>
    );
  }
}

Reason.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(Reason);
