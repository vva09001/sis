// tìm hiểu quền lợi ốm đau dài ngày
import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class SickLongDay extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title="Tìm hiểu quyền lợi BHXH -  Ốm đau dài ngày"
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p className="text-blue text-bold">
            {t('Điều kiện được hưởng chế độ')} <br />
          </p>
          <p>{t('dk1')}</p>
          <p>{t('dk2')}</p>
          <p>{t('dk3')}</p>
          <p className="text-blue text-bold">
            {t('Thời gian được nghỉ')} <br />
          </p>
          <p>{t('người lao động')}</p>
          <p className="text-blue text-bold">
            {t('Mức hưởng')} <br />
          </p>
          <p>{t('thời gian 180')}</p>
          <p className="text-blue text-bold">
            {t('Trong thời gian')} <br />
          </p>
        </div>
      </Layout>
    );
  }
}

SickLongDay.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(SickLongDay);
