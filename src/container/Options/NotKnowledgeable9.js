// trường hợp bạn chưa hiểu biết gì 9
import React, { Component } from 'react';
import Layout from 'container/Layout/LayoutButtons';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { IonButton, IonInput } from '@ionic/react';
import history from 'utils/history';
class NotKnowledgeable9 extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t(
          'Trường hợp bạn chưa hiểu chưa biết gì. Bạn chưa đăng ký với cơ quan BHXH số điện thoại nhận mã tra cứu OTP'
        )}
        btnName={t('back')}
        headerTo="/infoOTP"
        _onClick={() => history.goBack()}
        btnColor="light"
      >
        <Buttons number={2}>{t('đăng ký số điện thoại đã nghỉ việc')}</Buttons>
        <div className="content-options">
          <p className="tittle">{t('bổ xung thêm')}</p>
          <p className="font-10">{t('ví sẽ hoàn thiện')}</p>
          <div className="form-save">
            <div className="input">
              <IonInput placeholder="Nơi đăng kí giấy khai sinh" />
            </div>
            <div className="from-row" />
            <div className="input">
              <IonInput placeholder="Nơi đăng kí hộ khẩu thường chứ" />
            </div>
          </div>
          <div className="btn-save">
            <IonButton onClick={() => history.push('/notknowledgeable10')}>
              {t('save_Infon')}
            </IonButton>
          </div>
        </div>
      </Layout>
    );
  }
}
NotKnowledgeable9.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(NotKnowledgeable9);
