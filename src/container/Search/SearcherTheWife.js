//người tra cứu là vợ nam giới
import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ContentTitle from 'container/Common/ContentTitle';
import { CheckBook, ButtonNumber, ButtonDate, CardID } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
class SearcherTheWife extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t(
          'Người tra cứu là Vợ của Nam giới được hưởng quyền lợi BHXH vợ sinh con. Người vợ tra cứu quyền lợi cho chồng ngay trên App điện thoại của mình'
        )}
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
            <div className="numberChildren">
              <span>{t('Ngày nghỉ hàng tuần của chồng bạn')}</span>
              <ButtonNumber />
            </div>
            <div>
              <p>{t('Ngày bắt đầu nghỉ hưởng chế độ của chồng bạn')}</p>
              <ButtonDate />
            </div>
            <div>
              <p>{t('Ngày cuối cùng nghỉ hưởng chế độ chồng bạn')}</p>
              <ButtonDate />
            </div>
            <div>
              <p>{t('Ngày bạn sinh con')}</p>
              <ButtonDate />
            </div>
            <div>
              <p>{t('Phương thức sinh con')}</p>
              <CheckBook labelName="Phẫu thuật" />
              <CheckBook labelName="Sinh con thường" />
            </div>
            <div>
              <p>{t('Bạn mang thai bao nhiêu tháng thì sinh con')}</p>
              <CheckBook labelName="Trên 8 tháng mang thai" />
              <CheckBook labelName="Dưới 8 tháng mang thai" />
            </div>
            <div className="input">
              <p>{t('Số chứng minh thư hoặc thẻ căn cước của vợ')}</p>
              <CardID />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
SearcherTheWife.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(SearcherTheWife);
