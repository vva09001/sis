// trường hợp bạn chưa hiểu biết gì 10
import React, { Component } from 'react';
import Layout from 'container/Layout/LayoutButtons';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import declaration from 'assets/img/to-khai.png';
import history from 'utils/history';
class NotKnowledgeable9 extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t(
          'Trường hợp bạn chưa hiểu chưa biết gì. Bạn chưa đăng ký với cơ quan BHXH số điện thoại nhận mã tra cứu OTP'
        )}
        btnName={t('back')}
        headerTo="/infoOTP"
        _onClick={() => history.push('/getOTP')}
        btnColor="light"
      >
        <Buttons number={2}>{t('đăng ký số điện thoại đã nghỉ việc')}</Buttons>
        <div className="content-options">
          <p className="tittle">{t('nhận tờ khai')}</p>
          <div className="img-banner">
            <img src={declaration} alt="tờ khai" />
          </div>
        </div>
      </Layout>
    );
  }
}
NotKnowledgeable9.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(NotKnowledgeable9);
