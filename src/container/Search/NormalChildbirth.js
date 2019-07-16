// sinh con thông thường nghỉ đúng quy định

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ContentTitle from 'container/Common/ContentTitle';
import { ButtonNumber, ButtonDate } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class NormalChildbirth extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Sinh con thông thường và nghỉ trước khi sinh đúng quy định là 01 hoặc 02 tháng')}
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
              <p>{t('thời điểm bắt đầu nghỉ')}</p>
              <ButtonDate />
            </div>
            <div className="numberChildren">
              <p>{t('Thời điểm bạn sinh con')}</p>
              <ButtonDate />
            </div>
            <div>
              <p>{t('Thời điểm cuối cùng nghỉ chế độ sinh con')}</p>
              <ButtonDate />
            </div>
            <div className="numberChildren">
              <p>{t('Số lượng con sinh ra')}</p>
              <ButtonNumber />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
NormalChildbirth.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(NormalChildbirth);
