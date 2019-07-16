// kiểm tra quyền lợi sảy thai

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ContentTitle from 'container/Common/ContentTitle';
import { ButtonDate, ButtonNumber } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class Miscarriage extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t(
          'Quyền lợi hưởng BHXH – Sảy thai, nạo hút thai, phá thai bệnh lý, thai chết lưu trong thời điểm chưa phải là thời gian nghỉ sinh con'
        )}
        btnColor="primary"
        to="homepage"
        btnName={t('finish')}
      >
        <div className="cardInfo">
          <ContentTitle>
            {t(
              'Bạn bổ xung thêm thông tin theo quy định của BHXH để Ví kiểm tra quyền lợi và cung cấp dịch vụ hỗ trợ thủ tục cho bạn nhanh và chính xác nhất'
            )}
          </ContentTitle>
          <div className="form">
            <div>
              <p>{t('thời điểm bắt đầu nghỉ tại DN')}</p>
              <ButtonDate />
            </div>
            <div>
              <p>{t('thời điểm cuối cùng')}</p>
              <ButtonDate />
            </div>
            <div className="numberChildren">
              <p>{t('Thai  đã được bao nhiêu tuần tuổi')}</p>
              <ButtonNumber />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
Miscarriage.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(Miscarriage);
