import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ButtonDate from 'components/common/ButtonDate';
import InputNumber from 'components/common/ButtonNumber';
import ContentTitle from 'container/Common/ContentTitle';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
class InsBenefit extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t(
          'Quyền lợi hưởng BHXH - sảy thai, nạo hút thai, phá thai bệnh lý, thai chết trong thời điểm chưa phải là thời điểm sinh con'
        )}
        btnColor="primary"
        to="/noParticipation"
        btnName={t('finish')}
      >
        <div className="cardInfo">
          <ContentTitle>
            {t(
              'Bổ sung thông tin theo quy định của BHXH để Ví kiểm tra quyền lợi và cung cấp dịch vụ hỗ trợ cho bạn nhanh và chính sác nhất.'
            )}
          </ContentTitle>
          <div className="form-input">
            <div>
              <p>
                {t(
                  'Thời điểm bạn bắt đầu nghỉ việc tại DN(đơn vị) để thực hiện việc nạo hút thai, sảy thai, phá thai bệnh lý, thai chết luu.'
                )}
              </p>
              <ButtonDate />
            </div>
            <div>
              <p>{t('Thời điểm cuối cùng nghỉ chế độ sinh con')}</p>
              <ButtonDate />
            </div>
            <div className="third-input">
              <span>{t('Thai đã được bao nhiêu tuần tuổi')}</span>
              <InputNumber />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
InsBenefit.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(InsBenefit);
