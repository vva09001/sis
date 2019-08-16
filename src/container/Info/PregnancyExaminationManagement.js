//tìm hiểu QL thai sản khám thai
import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class PregnancyExaminationManagement extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Tìm hiểu quyền lợi thai sản nữ khám thai')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="cardInfo">
          <p>{t('trong thời gian mang thai')}</p>
          <p>{t('mỗi ngày nghỉ được')}</p>
          <p>{t('quy định lao động')}</p>
        </div>
      </Layout>
    );
  }
}
PregnancyExaminationManagement.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(PregnancyExaminationManagement);
