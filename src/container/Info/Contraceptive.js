//Đk vd tránh thai, ngừa sản
import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class Contraceptive extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Đăng ký dịch vụ thủ tục BHXH Tránh thai, triệt sản')}
        btnColor="primary"
        _onClick={() => history.goBack()}
        btnName={t('continue')}
      >
        <div className="cardInfo">
          <p>{t('quy định')}</p>
          <p>{t('các trường hợp')}</p>
          <p>{t('tự quyết định')}</p>
        </div>
      </Layout>
    );
  }
}
Contraceptive.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(Contraceptive);
