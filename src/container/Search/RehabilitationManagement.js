import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ContentTitle from 'container/Common/ContentTitle';
import { CheckBook, ButtonNumber, ButtonDate } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
class RehabilitationManagement extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Quyền lợi hưởng BHXH – Phục dưỡng phục hồi sức khỏe sau thai sản')}
        cardName="contentBoder"
        btnColor="primary"
        to="/search_insbenefit"
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
              <p>{t('Bạn thuộc trường hợp nào')}</p>
              <CheckBook labelName="Trong quá trình sinh con phải phẫu thuật" />
              <CheckBook labelName="Thuộc trường hợp khác" />
            </div>
            <div className="numberChildren">
              <span>{t('Số con sinh')}</span>
              <ButtonNumber />
            </div>
            <div>
              <p>{t('Thời điểm diễn ra một trong 03 trường hợp nêu trên.')}</p>
              <ButtonDate />
            </div>
            <div>
              <p>{t('Thời điểm trở lại làm việc sau chế độ nghỉ thai sản')}</p>
              <ButtonDate />
            </div>
            <div>
              <p>{t('Thời điểm bắt đầu nghỉ dưỡng sức')}</p>
              <ButtonDate />
            </div>
            <div>
              <p>{t('Thời điểm cuối cùng nghỉ dưỡng sức')}</p>
              <ButtonDate />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
RehabilitationManagement.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(RehabilitationManagement);
