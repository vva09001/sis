//trường hợp bạn chưa hiểu biết gì

import React, { Component } from 'react';
import Layout from 'container/Layout/LayoutButtons';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
class NotKnowledgeable extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t(
          'Trường hợp bạn chưa hiểu chưa biết gì. Bạn chưa đăng ký với cơ quan BHXH số điện thoại nhận mã tra cứu OTP'
        )}
        btnName={t('back')}
        headerTo="/infoOTP"
        to="/optionsregister"
        btnColor="light"
      >
        <div className="btn-options">
          <Buttons number={1}>{t('đăng ký số điện thoại vẫn đang làm việc')}</Buttons>
          <Buttons number={2}>{t('đăng ký số điện thoại đã nghỉ việc')}</Buttons>
        </div>
      </Layout>
    );
  }
}
NotKnowledgeable.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(NotKnowledgeable);
