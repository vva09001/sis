//tìm hiểu QL phương tiện trợ giúp

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class Help extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title="Tìm hiểu quyền lợi BHXH Phương tiện trợ giúp sinh hoạt, dụng cụ chỉnh hình sau tai nạn lao động, bệnh nghề nghiệp"
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p className="text-blue text-bold">{t('Điều kiện hưởng')}</p>
          <p>{t('Người lao động bị tai nạn')}</p>
          <p>{t('Căn cứ pháp lý')}</p>
          <p>
            {t('Điều 18')} <br />
            {t('Hồ sơ hưởng trợ cấp')} <br />
            {t('Chỉ định của cơ sỏ')}
          </p>
          <p className="text-blue text-bold">{t('Loại phương tiện')}</p>
          <p>
            {t('Có đầy đủ')}
            <br />
            {t('Các đồ dùng')}
            <br />
            {t('Trường hợp vừa bị thể tâm thần')}
            <br />
            {t('Trường hợp cấp xe lăn')}
          </p>
        </div>
      </Layout>
    );
  }
}

Help.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(Help);
