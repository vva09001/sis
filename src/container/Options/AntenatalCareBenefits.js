// QL thai sản khám thai

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class AntenatalCareBenefits extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Quyền lợi thai sản khi khám thai')}
        btnColor="light"
        to="homepage"
        btnName={t('back')}
      >
        <div className="btn-options">
          <Buttons number={1}>{t('Tìm hiểu quyền lợi')}</Buttons>
          <Buttons number={2}>{t('Kiểm tra quyền lợi')}</Buttons>
          <Buttons number={3}>{t('Đăng kí dịch vụ')}</Buttons>
        </div>
      </Layout>
    );
  }
}

AntenatalCareBenefits.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(AntenatalCareBenefits);
