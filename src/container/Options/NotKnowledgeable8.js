// trường hợp bạn chưa hiểu biết gì 8
import React, { Component } from 'react';
import Layout from 'container/Layout/LayoutButtons';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';
class NotKnowledgeable8 extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t(
          'Trường hợp bạn chưa hiểu chưa biết gì. Bạn chưa đăng ký với cơ quan BHXH số điện thoại nhận mã tra cứu OTP'
        )}
        btnName={t('back')}
        headerTo="/infoOTP"
        _onClick={() => history.goBack()}
        btnColor="light"
      >
        <Buttons number={2} click={() => history.push('/notknowledgeable9')}>
          {t('đăng ký số điện thoại đã nghỉ việc')}
        </Buttons>
        <div className="content-options">
          <p className="tittle">{t('xem nguyên tắc')}</p>
          <p className="font-10">{t('thời điểm')}</p>
        </div>
      </Layout>
    );
  }
}
NotKnowledgeable8.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(NotKnowledgeable8);
