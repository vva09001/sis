// chuyển khoản theo hướng dẫn

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { IonButton } from '@ionic/react';
import arrow from 'assets/img/right-arrow.png';
import { PopupSuccess } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class Transfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAlert: false
    };
  }
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
        <div className="cardInfo card-border">
          <p>{t('với dịch vụ')}</p>
          <p>
            {t('phí dịch vụ')}
            <span> 50.000 VĐN</span>
          </p>
        </div>
        <div className="box btn-mt">
          <div className="box-text">{t('bước 1')}</div>
          <img src={arrow} className="icon-arrow" alt="icon" />
          <div className="box-text">{t('bước 2')}</div>
        </div>
        <div className="btn-black btn-mt">
          <IonButton onClick={() => this.setState({ showAlert: true })}>{t('Đồng ý')}</IonButton>
        </div>
        <PopupSuccess
          isOpen={this.state.showAlert}
          setShowAlert={this.closeAlert}
          message="Toàn bộ tài liệu và hướng dẫn đã được Ví soạn sẵn và gửi vào địa chỉ mail/zalo của bạn"
        />
      </Layout>
    );
  }
}

Transfer.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(Transfer);
