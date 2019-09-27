// BHYT trả 95%

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import { IonButton } from '@ionic/react';
import PropTypes from 'prop-types';
import history from 'utils/history';

class Pay95 extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Trường hợp được bảo hiểm y tế thanh toán 95% chi phí khám chữa bệnh')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <ol>
            <li>
              <p>{t('Đối với người đang hưởng lương hưu')}</p>
            </li>
            <li>
              <p>{t('Người thuộc hộ gia đình nghèo')}</p>
            </li>
            <li>
              <p>
                {t('Người dân tộc thiểu số')}
              </p>
            </li>
            <li>
              <p>{t('Thân nhân của liệt sỹ')}</p>
            </li>
          </ol>
          <p className="text-blue text-bold">{t('Thì bạn được BHYT thanh toán cho bạn 95%')}</p>
          <div className="btn-submit">
            <IonButton>
              <p>
                {t('Kiểm tra quyền lợi')}
              </p>
            </IonButton>
          </div>
        </div>
      </Layout>
    );
  }
}

Pay95.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(Pay95);
