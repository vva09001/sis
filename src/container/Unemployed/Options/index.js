// quản lý hưởng quyền lợi thất nghiệp

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class Unemployed extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t(
          'Quản lý hưởng Quyền lợi BHXH - Bảo hiểm thất nghiệp, trợ cấp thất nghiệp, mất việc làm, thôi việc'
        )}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="btn-options">
          <Buttons number={1} click={() => history.push('/unemployed_interest')}>
            {t('Tìm hiểu quyền lợi')}
          </Buttons>
          <Buttons number={2} click={() => history.push('/unemployed_search')}>
            {t('Kiểm tra quyền lợi')}
          </Buttons>
          <Buttons number={3} click={() => history.push('/odregister')}>
            {t('Đăng kí dịch vụ')}
          </Buttons>
        </div>
      </Layout>
    );
  }
}

Unemployed.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(Unemployed);
