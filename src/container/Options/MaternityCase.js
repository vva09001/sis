// bạn thuộc trường hợp sinh sản nào

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class MaternityCase extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Quyền lợi hưởng BHXH – Sinh con')}
        contentTitle={t('Bạn thuộc trường hợp thai sản – sinh con thế nào ?')}
        btnColor="light"
        to="homepage"
        btnName={t('back')}
      >
        <div className="btn-options">
          <Buttons number={1}>{t('sinh con thông thường')}</Buttons>
          <Buttons number={2}>{t('trường hợp đặc biệt')}</Buttons>
          <Buttons number={3}>{t('nghỉ trước khi sinh')}</Buttons>
          <Buttons number={4}>{t('con chết sau khi sinh')}</Buttons>
          <Buttons number={5}>{t('nghỉ sớm hơn quy đinh')}</Buttons>
          <Buttons number={6}>{t('mẹ chết')}</Buttons>
        </div>
      </Layout>
    );
  }
}

MaternityCase.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(MaternityCase);
