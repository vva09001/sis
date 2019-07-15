// con chết sau sinh
import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ContentTitle from 'container/Common/ContentTitle';
import { CheckBook, ButtonNumber, ButtonDate } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class ChildDiesAfterBirth extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t(
          'Người tra cứu quyền lợi này là Nam giới, đang tra cứu quyền lợi BHXH trên chính App cài đặt trên điện thoại của mình'
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
              <p>{t('thời điểm bắt đầu nghỉ')}</p>
              <ButtonDate />
            </div>
            <div className="numberChildren">
              <p>{t('Thời điểm bạn sinh con')}</p>
              <ButtonDate />
            </div>
            <div>
              <p>{t('thời điểm cuối cùng')}</p>
              <ButtonDate />
            </div>
            <div className="numberChildren">
              <p>{t('Số lượng con khi sinh')}</p>
              <ButtonNumber />
            </div>
            <div className="numberChildren">
              <p>{t('Số lượng con còn sống')}</p>
              <ButtonNumber />
            </div>
            <div className="numberChildren">
              <p>{t('Số lượng con đã chết')}</p>
              <ButtonNumber />
            </div>
            <div>
              <p>{t('Khi con chết trong khoảng thời gian nào')}</p>
              <CheckBook labelName="Dưới 2 tháng tuổi" />
              <CheckBook labelName="Trong khoảng thời gian từ 2 tháng đến 6 tháng" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
ChildDiesAfterBirth.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(ChildDiesAfterBirth);
