// hiểu thế nào là khám chữa trái tuyến

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class UnderstandHowWrongRoute extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Hiểu thế nào là khám chữa bệnh trái tuyến')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p>{t('Hiểu một cách đơn giản là')}</p>
        </div>
      </Layout>
    );
  }
}

UnderstandHowWrongRoute.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(UnderstandHowWrongRoute);
