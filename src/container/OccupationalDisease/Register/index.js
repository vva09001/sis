// đăng ký dịch bụ hỗ trợ tai nạn

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class Register extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Đăng ký dịch vụ hỗ trợ thủ tục hưởng quyền lợi BHXH Tai nạn – Bệnh nghề nghiệp')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="btn-options">
          <Buttons number={1} click={() => history.push('/register_service')}>
            {t('DV hỗ trợ thủ tục hưởng quyền lợi BHXH Tai nạn lao động')}
          </Buttons>
          <Buttons number={2} click={() => history.push('/occupationaldiseasesick')}>
            {t('DV hỗ trợ thủ tục hưởng quyền lợi  BHXH Bệnh nghề nghiệp')}
          </Buttons>
          <Buttons number={3} click={() => history.push('/register_service')}>
            {t(
              'DV hỗ trợ thủ tục hưởng quyền lợi BHXH Phục hồi sức khỏe sau tai nạn, bệnh nghề nghiệp'
            )}
          </Buttons>
          <Buttons number={4} click={() => history.push('/register_service')}>
            {t(
              'DV hỗ trợ thủ tục hưởng quyền lợi BHXH  Phương tiện trợ giúp sinh hoạt, dụng cụ chỉnh  hình sau tai nạn lao động, bệnh nghề nghiệp'
            )}
          </Buttons>
          <Buttons number={5} click={() => history.push('/register_service')}>
            {t(
              'DV hỗ trợ thủ tục hưởng quyền lợi BHXH Phụ cấp cho người phục vụ chăm sóc NLĐ bị tai nạn lao động, bệnh nghề nghiệp'
            )}
          </Buttons>
        </div>
      </Layout>
    );
  }
}

Register.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(Register);
