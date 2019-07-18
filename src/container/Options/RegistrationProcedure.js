// tìm hiểu thụ tục đăng ký 1

import React, { Component } from 'react';
import Layout from 'container/Layout/LayoutButtons';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';
class RegistrationProcedure extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t(
          'Tìm hiểu và thực hiện thủ tục đăng ký hội viên để sử dụng đầy đủ chức năng và công dụng của Vi.'
        )}
        btnName={t('back')}
        _onClick={() => history.push('/optionsregister')}
        btnColor="light"
      >
        <div className="content-options">
          <Buttons number={1} click={() => history.push('/registrationprocedure2')}>
            {t('tìm hiểu')}
          </Buttons>
          <Buttons number={2} click={() => history.push('/registrationprocedure3')}>
            {t('thủ tục')}
          </Buttons>
          <Buttons number={3}>{t('nhu cầu')}</Buttons>
        </div>
      </Layout>
    );
  }
}
RegistrationProcedure.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(RegistrationProcedure);
