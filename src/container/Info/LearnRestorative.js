//tìm hiểu QL phục dưỡng
import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
class WifeParticipatesInInsurance extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title="Quyền lợi hưởng BHXH – Phục dưỡng phục hồi sức khỏe sau thai sản"
        btnColor="light"
        to="/search_noParticipation"
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p>
            {t('Lao động nứ thuộc 03 trường hợp')}
            <br />
            {t('trường hợp 1')}
            <br />
            {t('trường hợp 2')}
            <br />
            {t('trường hợp 3')}
          </p>
          <p>{t('số ngày nghỉ')}</p>
          <p>
            {t('thời gian nghỉ')}
            <br />
            {t('tối đa 01')}
            <br />
            {t('tối đa 02')}
            <br />
            {t('tối đa 03')}
          </p>
          <p>{t('thời gian nghĩ đưỡng phục sức')}</p>
          <p>{t('mức ảnh hưởng')}</p>
        </div>
      </Layout>
    );
  }
}

WifeParticipatesInInsurance.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(WifeParticipatesInInsurance);
