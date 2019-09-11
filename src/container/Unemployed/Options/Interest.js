// quản lý tìm hiểu quyền lợi thất nghiệp

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class Interest extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t(
          'Tìm hiểu quyền lợi BHXH - Bảo hiểm thất nghiệp, trợ cấp thất nghiệp, mất việc làm, thôi việc'
        )}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="btn-options">
          <Buttons number={1} click={() => history.push('/info_unemployed')}>
            {t('Tìm hiểu quyền lợi BHXH - Trợ cấp thất việc')}
          </Buttons>
          <Buttons number={2} click={() => history.push('/info_severance')}>
            {t('Tìm hiểu quyền lợi BHXH - Trợ cấp thôi việc')}
          </Buttons>
          <Buttons number={3} click={() => history.push('/info_lostmyjob')}>
            {t('Tìm hiểu quyền lợi BHXH – Trợ cấp mất việc làm')}
          </Buttons>
        </div>
      </Layout>
    );
  }
}

Interest.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(Interest);
