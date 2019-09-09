//tìm hiểu quản lý dưỡng sức

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class AfterTheAccident extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title="Tìm hiểu quyền lợi BHXH  Dưỡng sức phục hồi sức khỏe sau  tai nạn lao động, bệnh nghề nghiệp"
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p className="text-blue text-bold">{t('Điều kiện hưởng')}</p>
          <p>{t('Trong thời gian 30 ngày')}</p>
          <p className="text-blue text-bold">
            {t('Thời gian được nghỉ dưỡng sức phục hồi sức khỏe')} <br />
          </p>
          <p>
            {t('Tối đa 10 ngày')} <br />
            {t('Tối đa 07 ngày')} <br />
            {t('Tối đa 05 ngày')} <br />
            {t('Ngày nghỉ chế độ')}
          </p>
          <p className="text-blue text-bold">{t('Mức hưởng')}</p>
          <p>
            {t('Với người sử dụng lao động')} <br />
            {t('Đối với cơ quan')}
          </p>
        </div>
      </Layout>
    );
  }
}

AfterTheAccident.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(AfterTheAccident);
