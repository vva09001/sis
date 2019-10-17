// kiểm tra sức khỏe

import React, { Component } from 'react';
import Layout from 'container/Layout/LayoutButtons';
import { IonButton } from '@ionic/react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';
import { userActions } from '../../store/actions';
import { connect } from 'react-redux';

class HealthCheck extends Component {
  onFail = () => {};

  onSuccess = () => {
    history.goBack();
  };

  goBack = () => {
    this.props.getProfile(this.onSuccess, this.onFail);
  };

  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <Layout
          title={t('Kiếm tra “Sức khỏe” bảo hiểm xã hội hàng tháng của bạn')}
          btnName={t('ignore')}
          _onClick={this.goBack}
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
  data: PropTypes.array,
  getProfile: PropTypes.func
};

const mapDispatchToPros = {
  getProfile: userActions.getProfile
};

export default connect(
  null,
  mapDispatchToPros
)(withTranslation()(HealthCheck));
