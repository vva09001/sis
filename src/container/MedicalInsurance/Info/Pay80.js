// BHYT trả 80%

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import { IonButton } from '@ionic/react';
import PropTypes from 'prop-types';
import history from 'utils/history';

class Pay80 extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Trường hợp được bảo hiểm y tế thanh toán 80% chi phí khám chữa bệnh')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p className="text-blue text-bold">
            {t('Nếu bạn không thuộc trường hợp được BHYT thanh toán')}
          </p>
          <p className="text-blue text-bold">{t('Không phân biệt trường hợp')}</p>
          <p>{t('Thì chắc chắn Bạn thuộc trường  hợp')}</p>
          <div className="btn-submit">
            <IonButton>
              <p>{t('Kiểm tra quyền lợi')}</p>
            </IonButton>
          </div>
        </div>
      </Layout>
    );
  }
}

Pay80.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(Pay80);
