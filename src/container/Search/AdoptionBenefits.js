//kiểm tra quyền lợi con nuôi
import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ButtonDate from 'components/common/ButtonDate';
import ButtonNumber from 'components/common/ButtonNumber';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ContentTitle from 'container/Common/ContentTitle';

class AdoptionBenefits extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Quyền lợi hưởng BHXH – Con nuôi')}
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
          <p className="font-12">{t('theo quy định lao động')}</p>
          <div className="form">
            <div className="numberChildren">
              <p>{t('Số tháng tuổi con nuôi')}</p>
              <ButtonNumber />
            </div>
            <div>
              <p>{t('Thời điểm bắt đầu nghỉ')}</p>
              <ButtonDate />
            </div>
            <div>
              <p>{t('Thời điểm nghỉ cuối cùng của bạn')}</p>
              <ButtonDate />
            </div>
            <div className="numberChildren">
              <p>{t('Số lượng con nuôi')}</p>
              <ButtonNumber />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
AdoptionBenefits.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(AdoptionBenefits);
