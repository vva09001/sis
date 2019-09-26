// phí dịch vụ
import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { IonButton } from '@ionic/react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class ServiceCharge extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Cảm ơn')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="cardInfo">
          <p>{t('với dịch vụ')}</p>
          <p>
            {t('phí dịch vụ')}
            <span> 50.000 VND</span>
          </p>
        </div>
        <div className="btn-black">
          <IonButton onClick={() => history.push('/transfer')}>{t('Đồng ý')}</IonButton>
        </div>
      </Layout>
    );
  }
}

ServiceCharge.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(ServiceCharge);
