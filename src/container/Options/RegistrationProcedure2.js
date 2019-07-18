// tìm hiểu thụ tục đăng ký 2

import React, { Component } from 'react';
import Layout from 'container/Layout/LayoutOptions';
import { withTranslation } from 'react-i18next';
import { IonButton } from '@ionic/react';
import history from 'utils/history';
import PropTypes from 'prop-types';

class RegistrationProcedure2 extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t(
          'Tìm hiểu và thực hiện thủ tục đăng ký hội viên để sử dụng đầy đủ chức năng và công dụng của Vi.'
        )}
        showRectang={true}
        rectangNumber={1}
      >
        <div className="text-content text-contentRectang">
          <p className="text-top marginTop">
            {t('ví sử dụng')} <br />
            {t('việc nộp')}
          </p>
          <p>
            {t('Biểu phí duy trì hàng năm')} <br />
            {t('duy trì 1')}
            <br />
            {t('duy trì 2')}
            <br />
            {t('duy trì 3')}
            <br />
          </p>
          <p className="text-bottom">{t('ngoài ra')}</p>
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
RegistrationProcedure2.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(RegistrationProcedure2);
