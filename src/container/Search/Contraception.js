// kiểm tra quyền lợi tránh thai

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ContentTitle from 'container/Common/ContentTitle';
import { CheckBook, ButtonDate } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class Contraception extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Quyền lợi hưởng BHXH Tránh thai, triệt sản')}
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
              <p>{t('Bạn thuộc trường hợp nào')}</p>
              <CheckBook labelName="Tránh thai" />
              <CheckBook labelName="Triệt sản" />
            </div>
            <div>
              <p>{t('thời điểm bắt đầu nghỉ')}</p>
              <ButtonDate />
            </div>
            <div>
              <p>{t('thời điểm cuối cùng')}</p>
              <ButtonDate />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}
Contraception.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(Contraception);
