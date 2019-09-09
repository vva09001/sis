//QL sảy thai

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class Miscarriage extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Quyền lợi hưởng BHXH - Sảy thai')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="btn-options">
          <Buttons number={1} click={() => history.push('/managementmiscarriage')}>
            {t('Tìm hiểu quyền lợi')}
          </Buttons>
          <Buttons number={2} click={() => history.push('/search_miscarriage')}>
            {t('Kiểm tra quyền lợi')}
          </Buttons>
          <Buttons number={3} click={() => history.push('/miscarriage')}>
            {t('Đăng kí dịch vụ')}
          </Buttons>
        </div>
      </Layout>
    );
  }
}

Miscarriage.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(Miscarriage);
