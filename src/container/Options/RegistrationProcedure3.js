// tìm hiểu thụ tục đăng ký 3

import React, { Component } from 'react';
import Layout from 'container/Layout/LayoutOptions';
import { withTranslation } from 'react-i18next';
import { IonButton } from '@ionic/react';
import history from 'utils/history';
import PropTypes from 'prop-types';
import { IonInput } from '@ionic/react';

class RegistrationProcedure3 extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t(
          'Tìm hiểu và thực hiện thủ tục đăng ký hội viên để sử dụng đầy đủ chức năng và công dụng của Vi.'
        )}
        showRectang={true}
        rectangNumber={2}
      >
        <div className="text-content text-contentRectang shadow">
          <p className="text-top text-title-content">{t('Hướng dẫn bạn nộp phí duy trì ví')}</p>
          <p>{t('lần đâu tiên')}</p>
          <p className="text-bottom">{t('ví chập nhận')}</p>
        </div>
        <div className="text-content text-contentRectang2">
          <p className="text-top text-title-content">
            {t('Thực hiện thao tác nộp phí duy trì ví')}
          </p>
          <div className="form">
            <div className="phone">
              <span>{t('Thời hạn đăng kí duy trì ví')}</span>
              <IonInput name="username" />
            </div>
            <div className="user">
              <span className="text-mid">{t('Thành tiền')}</span>
              <IonInput />
            </div>
            <div className="pass">
              <span>{t('Bạn thực hiện thao tác chuyển khoản phí')}</span>
              <IonInput name="password" />
            </div>
          </div>
          <div className="btn-back btn-save">
            <IonButton onClick={() => history.push('/owneroftheWallet')}>{t('finish')}</IonButton>
          </div>
        </div>
        <div className="btn-back btnBack-rectang">
          <IonButton color="light" onClick={() => history.goBack()}>
            {t('back')}
          </IonButton>
        </div>
      </Layout>
    );
  }
}
RegistrationProcedure3.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(RegistrationProcedure3);
