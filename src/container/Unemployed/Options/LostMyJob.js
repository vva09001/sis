//QL trợ cấp mất việc

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class LostMyJob extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Quyền lợi hưởng BHXH - Trợ cấp mất việc làm')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="btn-options">
          <p className="ion-text-center text-bold">{t('Bạn thuộc trường hợp nào?')}</p>
          <Buttons number={1} click={() => history.push('/search_lostmyJob')}>
            {t(
              'Bạn chưa từng nghỉ việc tạm thời và nhận trợ cấp thôi việc tại DN(đơn vị) hiện tại '
            )}
          </Buttons>
          <Buttons number={2} click={() => history.push('/search_temporary')}>
            {t('Bạn đã từng nghỉ việc tạm thời và nhận trợ cấp thôi việc tại DN(đơn vị) hiện tại')}
          </Buttons>
        </div>
      </Layout>
    );
  }
}

LostMyJob.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(LostMyJob);
