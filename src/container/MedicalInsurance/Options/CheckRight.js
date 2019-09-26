// kiểm tra quyền lợi BHYT;

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
// import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class CheckRight extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Kiểm tra quyền lợi BHYT')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="cardInfo">
          <p>{t('Để bạn có thể')}</p>
          <p className="text-bold">{t('Để bạn có thể')}</p>
          <p className="text-blue text-bold">{t('Để bạn có thể')}</p>
        </div>
      </Layout>
    );
  }
}

CheckRight.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(CheckRight);
