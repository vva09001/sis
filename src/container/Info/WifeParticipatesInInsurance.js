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
        title="Trường hợp Nam giới có vợ tham gia BHXH được hưởng quyền lợi thai sản theo vợ thế nào ?"
        btnColor="light"
        to="/noParticipation"
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p>
            {t(
              'Chỉ cần điều kiện đã tham gia đóng BHXH , đóng bao nhiêu tháng cũng được, không nhất thiết phải như quy định thông thường là đóng BHXH đủ từ 6 tháng trở lên trong 12 tháng trước khi vợ sinh'
            )}
          </p>
          <p>{t('Quyền lợi được hưởng')}</p>
          <p>{t('Lưu ý')}</p>
        </div>
      </Layout>
    );
  }
}

WifeParticipatesInInsurance.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(WifeParticipatesInInsurance);
