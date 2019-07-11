// bạn là người mang thai hộ
import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class Surrogacy extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Bạn là người mang thai hộ')}
        btnColor="light"
        to="/noParticipation"
        btnName={t('back')}
      >
        <div className="cardInfo">
          <p>{t('quyền lợi được hưởng đầy đủ')}</p>
          <p>{t('hưởng chế độ')}</p>
          <p>
            {t('thời gian nghỉ sinh')}
            <br />
            {t('kể từ thời điểm giao con')}
            <br />
            {t('được nghỉ phục đưỡng')}
          </p>
          <p>{t('quyền lợi đang nghiên cứu')}</p>
          <p>{t('lao động nữ phải tham gia')}</p>
          <p>{t('chồng của lao động nữ')}</p>
        </div>
      </Layout>
    );
  }
}
Surrogacy.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(Surrogacy);
