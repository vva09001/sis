// trường hợp bạn chưa hiểu biết gì 6
import React, { Component } from 'react';
import Layout from 'container/Layout/LayoutButtons';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';
class NotKnowledgeable6 extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t(
          'Tìm hiểu và thực hiện thủ tục đăng ký hội viên để sử dụng đầy đủ chức năng và công dụng của Vi.'
        )}
        btnName={t('back')}
        headerTo="/infoOTP"
        _onClick={() => history.push('/getOTP')}
        btnColor="light"
      >
        <Buttons number={1}>{t('đăng ký số điện thoại')}</Buttons>
        <div className="content-options">
          <p className="tittle">{t('thời gian')}</p>
          <p className="text-content">{t('sau khoang thời gian')}</p>
        </div>
      </Layout>
    );
  }
}
NotKnowledgeable6.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(NotKnowledgeable6);
