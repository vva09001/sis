// tìm hiểu quyền lợi con ốm

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class SickChildren extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title="Tìm hiểu quyền lợi hưởng BHXH Con ốm"
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p className="text-blue text-bold">
            {t('Điều kiện được hưởng')} <br />
          </p>
          <p>
            {t('NLĐ (là bố, mẹ) đã tham gia đóng BHXH')} <br />
            {t('NLĐ có con dưới bảy tuổi bị ốm đau, phải nghỉ việc để ')}
            <br />
            {t('chăm sóc con và có xác nhận của cơ sở y tế.')}
            <br />
            {t('Chỉ một trong hai NLĐ (Bố hoặc mẹ) được đứng tên trong ')}
            <br />
            {t('hồ sơ BHXH hưởng quyền lợi')}
          </p>
          <p className="text-blue text-bold">
            {t('quyền lợi')} <br />
          </p>
          <p>
            {t('thời gian được nghỉ')}
            <br />
            {t('được nghỉ 15 ngày')}
          </p>
          <p>{t('Mức quyền lợi')}</p>
          <p className="text-blue text-bold">
            {t('Trong thời gian NLĐ nghỉ ốm, DN(đơn vị) không phải trả lương cho NLĐ ')} <br />
          </p>
        </div>
      </Layout>
    );
  }
}

SickChildren.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(SickChildren);
