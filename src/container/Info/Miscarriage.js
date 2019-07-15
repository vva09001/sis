//ĐKBHXH sảy thai
import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class Miscarriage extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t(
          'Đăng ký dịch vụ thủ tục BHXH Sảy thai, nạo hút thai, phá thai bệnh lý, thai chết lưu trong thời điểm chưa phải là thời gian nghỉ sinh con'
        )}
        btnColor="primary"
        to="/search_noParticipation"
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
Miscarriage.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(Miscarriage);
