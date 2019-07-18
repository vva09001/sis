// trường hợp bạn chưa hiểu biết gì 3
import React, { Component } from 'react';
import Layout from 'container/Layout/LayoutButtons';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import arrow from '../../assets/img/right-arrow.png';
import history from 'utils/history';
class NotKnowledgeable3 extends Component {
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
        <Buttons number={1} click={() => history.push('/notknowledgeable4')}>
          {t('đăng ký số điện thoại')}
        </Buttons>
        <div className="content-options">
          <p className="tittle">{t('làm theo thứ tự')}</p>
          <div className="box">
            <div className="box-text">{t('xem nguyên tắc')}</div>
            <img src={arrow} className="icon-arrow" alt="icon" />
            <div className="box-text">{t('thực hiện')}</div>
            <img src={arrow} className="icon-arrow" alt="icon" />
            <div className="box-text">{t('thời gian chờ')}</div>
          </div>
        </div>
      </Layout>
    );
  }
}
NotKnowledgeable3.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(NotKnowledgeable3);
