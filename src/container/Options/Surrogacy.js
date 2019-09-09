//Ql mang thai hộ

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class Surrogacy extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Quyền lợi hưởng BHXH - Mang thai hộ')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="btn-options">
          <Buttons number={1} click={() => history.push('/surrogatemother')}>
            {t('Bạn là người mang thai hộ')}
          </Buttons>
          <Buttons number={2} click={() => history.push('/thankssurrogacy')}>
            {t('Bạn là người nhờ mang thai hộ')}
          </Buttons>
          <Buttons number={3} click={() => history.push('/register_surrogacy')}>
            {t('Đăng kí dịch vụ')}
          </Buttons>
        </div>
      </Layout>
    );
  }
}

Surrogacy.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(Surrogacy);
