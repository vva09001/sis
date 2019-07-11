//tìm hiểu quản lý BHXH sảy thai
import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class ManagementOfMiscarriage extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t(
          'Quyền lợi hưởng BHXH – Sảy thai, nạo hút thai, phá thai bệnh lý, thai chết lưu trong thời điểm chưa phải là thời gian nghỉ sinh con'
        )}
        btnColor="light"
        to="/noParticipation"
        btnName={t('back')}
      >
        <div className="cardInfo">
          <p>{t('khoản 1')}</p>
          <p>
            {t('thời gian nghỉ việc tối đa')} <br />
            {t('10 ngày')}
            <br />
            {t('20 ngày')}
            <br />
            {t('40 ngày')}
            <br />
            {t('50 ngày')}
            <br />
            {t('thời gian tính cả')}
          </p>
          <p>{t('ghi chú')}</p>
        </div>
      </Layout>
    );
  }
}
ManagementOfMiscarriage.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(ManagementOfMiscarriage);
