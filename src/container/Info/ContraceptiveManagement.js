//tìm hiểu QL tranh thai

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class ContraceptiveManagement extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Quyền lợi hưởng BHXH Tránh thai, triệt sản')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="cardInfo">
          <p>{t('quy định')}</p>
          <p>
            {t('khi thực hiện các biện pháp tránh thai')} <br />
            {t('07 ngày')} <br />
            {t('15 ngày')}
          </p>
          <p>{t('thời gian hưởng chế độ thai sản')}</p>
          <p>{t('ghi chú')}</p>
        </div>
      </Layout>
    );
  }
}
ContraceptiveManagement.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(ContraceptiveManagement);
