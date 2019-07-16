// người tra cứu là vợ không tham gia BHXH
import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ButtonDate from 'components/common/ButtonDate';
import ButtonNumber from 'components/common/ButtonNumber';
import InputCardID from 'components/common/InputCardid';
import CheckBok from 'components/common/CheckBook';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ContentTitle from 'container/Common/ContentTitle';
class NoParticipation extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t(
          'Người tra cứu là Vợ của nam giới được hưởng quyền lợi BHXH vợ sinh con. Người vợ tra cứu quyền lợi cho chồng ngay trên App điện thoại của mình'
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
            <p>{t('Ngày bạn sinh')}</p>
            <ButtonDate />
            <p>{t('Phương thức sinh con')}</p>
            <CheckBok labelName="Phẫu Thuật" />
            <CheckBok labelName="Sinh con thường" />
            <div className="numberChildren">
              <p>{t('Số con sinh')}</p>
              <ButtonNumber />
            </div>
            <p>{t('Số chứng minh thư hoặc thẻ căn cước của bạn')}</p>
            <div className="input">
              <InputCardID />
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
