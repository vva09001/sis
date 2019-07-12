//đăng kí DV mang thai hộ

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class DKSurrogacy extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Đăng ký dịch vụ thủ tục BHXH Mang thai hộ')}
        contentTitle={t(
          'Bạn đăng ký dịch vụ hỗ trợ thủ tục BHXH nam giới có vợ sinh con trường hợp nào ?'
        )}
        btnColor="light"
        to="homepage"
        btnName={t('back')}
      >
        <div className="btn-options">
          <Buttons number={1}>{t('Bạn là người mang thai hộ')}</Buttons>
          <Buttons number={2}>{t('Bạn là người nhờ mang thai hộ')}</Buttons>
        </div>
      </Layout>
    );
  }
}

DKSurrogacy.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(DKSurrogacy);
