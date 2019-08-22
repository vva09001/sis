//kiểm tra quá trình tham gia

import React, { Component } from 'react';
import Layout from 'container/Layout/LayoutButtons';
import { Buttons } from 'components/common';
import { IonButton } from '@ionic/react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class ProcessParticipation extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Kiểm tra quá trình tham gia BHXH của bạn')}
        btnName={t('ignore')}
        _onClick={() => history.goBack()}
        btnColor="light"
      >
        <div className="content-options">
          <Buttons number={1}>{t('Quá trình tham gia BHXH (thời gian)')}</Buttons>
          <div className="wapper-flex">
            <IonButton>{t('Phiên bản rút gọn')}</IonButton>
            <IonButton>{t('Phiên bản chi tiết')}</IonButton>
          </div>
          <Buttons number={2}>{t('Quá trình đóng BHXH (việc nộp tiền)')}</Buttons>
          <div className="wapper-flex">
            <IonButton>{t('Phiên bản rút gọn')}</IonButton>
            <IonButton>{t('Phiên bản chi tiết')}</IonButton>
          </div>
        </div>
      </Layout>
    );
  }
}
ProcessParticipation.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(ProcessParticipation);
