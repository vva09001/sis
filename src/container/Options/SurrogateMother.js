// bạn là người mang thai hộ

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class SurrogateMother extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Bạn là người mang thai hộ')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="btn-options">
          <Buttons number={1} click={() => history.push('/surrogacy')}>
            {t('Tìm hiểu quyền lợi')}
          </Buttons>
          <Buttons number={2} click={() => history.push('/search_searchsurrogacy')}>
            {t('Kiểm tra quyền lợi')}
          </Buttons>
          <Buttons number={3} click={() => history.push('/register_surrogacy')}>
            {t('Đăng kí dịch vụ')}
          </Buttons>
        </div>
      </Layout>
    );
  }
}

SurrogateMother.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(SurrogateMother);
