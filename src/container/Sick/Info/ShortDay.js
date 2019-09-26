// tìm hiểu quyền lợi ốm đau ngắn ngày

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class SickShortDay extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title="Tìm hiểu quyền lợi BHXH -  Ốm đau ngắn ngày"
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p className="text-blue text-bold">
            {t('Điều kiện được hưởng')} <br />
          </p>
          <p>{t('điểu kiện 1')}</p>
          <p>{t('điểu kiện 2')}</p>
          <p>{t('trường hợp ốm đau')}</p>
          <p className="text-blue text-bold">
            {t('quyền lợi')} <br />
          </p>
          <p>
            {t('quy định ốm')}
            <br />
            {t('Trong điều kiện bình thường')}
            <br />
            {t('Được nghỉ tổng cộng 30 ngày/năm  (nếu tham gia BHXH dưới 15 năm)')}
            <br />
            {t('Được nghỉ tổng cộng 60 ngày /năm (nếu tham gia BHXH từ đủ từ 30 năm trở lên)')}
            <br />
            {t('Nếu trong điều kiện nặng nhọc, độc hại, phụ cấp khu vực từ 0,7 trở lên.')}
            <br />
            {t('Được nghỉ tổng cộng 40 ngày/năm(nếu tham gia BHXH dưới 15 năm)')}
            <br />
            {t('Được nghỉ tổng cộng 50 ngày /năm (nếu tham gia BHXH từ 15 năm đến dưới 30 năm)')}
            <br />
            {t('Được nghỉ tổng cộng 70 ngày /năm (nếu tham gia BHXH từ đủ từ 30 năm trở lên)')}
          </p>
          <p>{t('Thời gian')}</p>
          <p>{t('Mức quyền lợi')}</p>
          <p className="text-blue text-bold">
            {t('Trong thời gian NLĐ nghỉ ốm, DN(đơn vị) không phải trả lương cho NLĐ ')} <br />
          </p>
        </div>
      </Layout>
    );
  }
}

SickShortDay.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(SickShortDay);
