// tìm hiểu thụ tục đăng ký

import React, { Component } from 'react';
import Layout from 'container/Layout/LayoutButtons';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
class GetOPT extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t(
          'Tìm hiểu và thực hiện thủ tục đăng ký hội viên để sử dụng đầy đủ chức năng và công dụng của Vi.'
        )}
        btnName={t('back')}
        to="/optionsregister"
        btnColor="light"
      >
        <div className="content-options">
          <Buttons number={1}>{t('tìm hiểu')}</Buttons>
          <Buttons number={2}>{t('thủ tục')}</Buttons>
          <Buttons number={3}>{t('nhu cầu')}</Buttons>
        </div>
      </Layout>
    );
  }
}
GetOPT.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(GetOPT);
