//kiểm tra quyền lợi bạn nhờ mang thai hộ

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ContentTitle from 'container/Common/ContentTitle';
import { CheckBook, ButtonNumber, ButtonDate } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
class ThankSurrogacy extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Bạn là người nhờ mang thai hộ')}
        cardName="contentBoder"
        btnColor="primary"
        to="/search_insbenefit"
        btnName={t('finish')}
      >
        <div className="cardInfo">
          <ContentTitle>
            {t(
              'Bạn là người nhờ mang thai hộBạn bổ xung thêm thông tin theo quy định của BHXH để Ví kiểm tra quyền lợi và cung cấp dịch vụ hỗ trợ thủ tục cho bạn nhanh và chính xác nhất'
            )}
          </ContentTitle>
          <div className="form">
            <div>
              <p>{t('thời điểm nhận con')}</p>
              <ButtonDate />
            </div>
            <div>
              <p>{t('Thời điểm cuối cùng nghỉ chế độ')}</p>
              <ButtonDate />
            </div>
            <div>
              <p>{t('nhận con ở tình trạng')}</p>
              <ButtonDate />
            </div>
            <div>
              <p>{t('Thời điểm cuối cùng nghỉ chế độ')}</p>
              <ButtonDate />
            </div>
            <div className="btn-number">
              <p>{t('Bạn ở tình trạng sinh bình thường Số lượng con sinh ra')}</p>
              <ButtonNumber />
            </div>
            <div>
              <p>{t('bạn không được may mắn')}</p>
              <CheckBook labelName="Các con đều chết dưới 60 ngày tuổi" />
              <CheckBook labelName="Các con đều chết sau 60 ngày tuổi" />
            </div>
            <div>
              <p>{t('là một sự tế nhị')}</p>
              <ButtonDate />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
ThankSurrogacy.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(ThankSurrogacy);
