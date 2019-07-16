//kiểm tra quyền lợi bạn là người mang thai hộ

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ContentTitle from 'container/Common/ContentTitle';
import { CheckBook, ButtonNumber, ButtonDate } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
class Surrogacy extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Bạn là người mang thai hộ')}
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
            <div>
              <p>{t('Thời điểm bạn sinh con')}</p>
              <ButtonDate />
            </div>
            <div>
              <p>{t('Thời điểm bạn giao con cho người mẹ nhờ mang thai hộ')}</p>
              <ButtonDate />
            </div>
            <div>
              <p>{t('Thời điểm cuối cùng nghỉ chế độ')}</p>
              <ButtonDate />
            </div>
            <div className="numberChildren">
              <p>{t('Bạn ở tình trạng sinh bình thường Số lượng con sinh ra')}</p>
              <ButtonNumber />
            </div>
            <div>
              <p>{t('Bạn ở tình trạng sinh, nhưng con chết, ở trường hợp nào ?')}</p>
              <CheckBook labelName="Các con đều chết dưới 60 ngày tuổi" />
              <CheckBook labelName="Các con đều chết sau 60 ngày tuổi" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
Surrogacy.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(Surrogacy);
