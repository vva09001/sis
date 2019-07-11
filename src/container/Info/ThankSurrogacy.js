// nhờ mang thai hộ
import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class ThankSurrogacy extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Bạn là người nhờ mang thai hộ')}
        btnColor="light"
        to="/noParticipation"
        btnName={t('back')}
      >
        <div className="cardInfo">
          <p>{t('người mẹ nhờ mang thai hộ')}</p>
          <p>{t('người mẹ nhờ mang thai hộ phải đóng BHXH')}</p>
          <p>{t('nếu lao động là nữ')}</p>
          <p>{t('trường hợp người mẹ chết hoặc không đủ sức')}</p>
          <p>{t('trường hợp con chết')}</p>
        </div>
      </Layout>
    );
  }
}
ThankSurrogacy.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(ThankSurrogacy);
