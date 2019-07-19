// người tra cứu là nam giới vợ không tham gia
import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ContentTitle from 'container/Common/ContentTitle';
import { CheckBook, ButtonNumber, ButtonDate, CardID } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
class NoParticipation extends Component {
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
            <p>{t('Ngày vợ sinh')}</p>
            <ButtonDate />
            <p>{t('Phương thức sinh con')}</p>
            <CheckBook labelName="Phẫu Thuật" />
            <CheckBook labelName="Sinh con thường" />
            <div className="numberChildren">
              <p>{t('Số con sinh')}</p>
              <ButtonNumber />
            </div>
            <p>{t('Số chứng minh thư hoặc thẻ căn cước của vợ')}</p>
            <div className="input">
              <CardID />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
NoParticipation.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(NoParticipation);