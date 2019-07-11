import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ButtonDate from 'components/common/ButtonDate';
import ButtonNumber from 'components/common/ButtonNumber';
import InputCardID from 'components/common/InputCardid';
import CheckBok from 'components/common/CheckBook';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
class NoParticipation extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t(
          'Người tra cứu là Vợ của nam giới được hưởng quyền lợi BHXH vợ sinh con. Người vợ tra cứu quyền lợi cho chồng ngay trên App điện thoại của mình'
        )}
        contentTitle={t(
          'Bạn bổ xung thêm thông tin theo quy định BHXH để Ví kiểm tra quyền lợi cung cấp dịch vụ hỗ trợ thủ tục cho bạn nhanh và chính xác'
        )}
        btnColor="primary"
        to="homepage"
        btnName={t('finish')}
      >
        <div className="form">
          <p>{t('Ngày vợ sinh')}</p>
          <ButtonDate />
          <p>{t('Phương thức sinh con')}</p>
          <CheckBok labelName="Phẫu Thuật" />
          <CheckBok labelName="Sinh con thường" />
          <div className="numberChildren">
            <p>{t('Số con sinh')}</p>
            <ButtonNumber />
          </div>
          <p>{t('Số chứng minh thư hoặc thẻ căn cước của vợ')}</p>
          <div className="input">
            <InputCardID />
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
