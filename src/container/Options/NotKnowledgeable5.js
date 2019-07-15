// trường hợp bạn chưa hiểu biết gì 5
import React, { Component } from 'react';
import Layout from 'container/Layout/LayoutButtons';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class NotKnowledgeable5 extends Component {
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
        <Buttons number={2}>{t('đăng ký số điện thoại vẫn đang làm việc')}</Buttons>
        <div className="content-options">
          <p className="tittle">{t('thực hiện quyền giám sát')}</p>
          <p className="font-10">{t('bộ phận phụ trách')}</p>
          <p className="font-10">{t('thực hiện các công việc')}</p>
        </div>
      </Layout>
    );
  }
}
NotKnowledgeable5.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(NotKnowledgeable5);
