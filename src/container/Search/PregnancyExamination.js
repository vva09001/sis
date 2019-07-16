// kiểm tra quyền lợi khám thai
import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { ButButtonDay } from 'components/common';
import { IonInput } from '@ionic/react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class PregnancyExamination extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Kiểm tra quyền lợi')}
        content={t('bạn hãy cũng cấp')}
        btnColor="primary"
        to="homepage"
        btnName={t('finish')}
      >
        <div className="cardInfo">
          <p className="text-primary">{t('thời gian nào')}</p>
          <div className="form">
            <div className="text-input">
              <IonInput inputmode="text" />
            </div>
            <p>{t('Lần nghỉ 1 ngày đi khám')}</p>
            <div className="day-wapper">
              <span>{t('Từ ngày')}</span>
              <ButButtonDay />
              <span className="margin-left">{t('Đến ngày')}</span>
              <ButButtonDay />
            </div>
            <p>{t('Lần nghỉ 2 ngày đi khám')}</p>
            <div className="day-wapper">
              <span>{t('Từ ngày')}</span>
              <ButButtonDay />
              <span className="margin-left">{t('Đến ngày')}</span>
              <ButButtonDay />
            </div>
            <p>{t('Tình trạng khám thai')}</p>
            <div className="text-input">
              <IonInput inputmode="text" />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

PregnancyExamination.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(PregnancyExamination);
