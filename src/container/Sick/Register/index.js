// Đăng ký dịch vụ ốm đau

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class SickRegisterOption extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Đăng ký dịch vụ hỗ trợ thủ thục giải quyết quyền lợi ốm đau')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="btn-options">
          <Buttons number={1}>
            {t('DV hỗ trợ thủ tục hưởng quyền lợi BHXH Ốm đau ngắn ngày')}
          </Buttons>
          <Buttons number={2}>
            {t('DV hỗ trợ thủ tục hưởng quyền lợi BHXH Ốm đau dài ngày')}
          </Buttons>
          <Buttons number={3}>
            {t('DV hỗ trợ thủ tục hưởng quyền lợi BHXH Phục hồi sức khỏe sau ốm')}
          </Buttons>
          <Buttons number={4}>{t('DV hỗ trợ thủ tục hưởng quyền lợi  BHXH Con ốm')}</Buttons>
        </div>
      </Layout>
    );
  }
}

SickRegisterOption.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(SickRegisterOption);
