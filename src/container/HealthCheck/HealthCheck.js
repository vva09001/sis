// kiểm tra sức khỏe

import React, { Component } from 'react';
import Layout from 'container/Layout/LayoutButtons';
import { IonButton } from '@ionic/react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class HealthCheck extends Component {
  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <Layout
          title={t('Kiếm tra “Sức khỏe” bảo hiểm xã hội hàng tháng của bạn')}
          btnName={t('ignore')}
          _onClick={() => history.goBack()}
          btnColor="light"
        >
          <div className="content-options content-position">
            <div className="health-banner">
              <p>{t('quyền lợi được hưởng của mình')}</p>
              <p>{t('báo cáo của ví')}</p>
              <div className="btn-flex">
                <IonButton onClick={() => history.push('/healthcheckresult')}>
                  Kiểm tra sức khỏe BHXH cuối tháng
                </IonButton>
              </div>
            </div>
          </div>
        </Layout>
      </React.Fragment>
    );
  }
}

HealthCheck.propTypes = {
  t: PropTypes.func,
  data: PropTypes.array
};

export default withTranslation()(HealthCheck);
