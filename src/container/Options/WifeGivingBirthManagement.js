//QL nam giới vợ sinh con

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class WifeGivingBirthManagement extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Quyền lợi hưởng BHXH – Nam giới vợ sinh con')}
        btnColor="light"
        to="homepage"
        btnName={t('back')}
      >
        <div className="btn-options">
          <Buttons number={1}>{t('Trường hợp Nam giới có vợ tham gia BHXH')}</Buttons>
          <Buttons number={2}>{t('không đủ điều kiện')}</Buttons>
          <Buttons number={3}>{t('Đăng kí dịch vụ')}</Buttons>
        </div>
      </Layout>
    );
  }
}

WifeGivingBirthManagement.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(WifeGivingBirthManagement);
