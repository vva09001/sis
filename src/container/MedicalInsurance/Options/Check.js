// qua trình tham gia BHYT;

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class Check extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Quá trình tham gia Bảo hiểm Y Tế')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="btn-options">
          <Buttons number={1} click={() => history.push('/reason_medicalinsurance')}>
            {t('Thông tin lưu ý')}
          </Buttons>
          <Buttons number={2} click={() => history.push('/options_wifenotparticipating')}>
            {t('Kiểm tra quyền lợi')}
          </Buttons>
          {/* <Buttons number={3} click={() => history.push('/pregnancyexamination')}>
            {t('Đăng kí dịch vụ')}
          </Buttons> */}
        </div>
      </Layout>
    );
  }
}

Check.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(Check);
