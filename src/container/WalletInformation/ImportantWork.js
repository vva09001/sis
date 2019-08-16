// công việc quan trọng mỗi tháng

import React, { Component } from 'react';
import Layout from '../Layout/LayoutOptions';
import { IonButton } from '@ionic/react';
import history from 'utils/history';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class ImportantWork extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t(
          'Công việc quan trọng nhất mỗi tháng bạn phải thực hiện để Ví có cơ sở dữ liệu hoạt động'
        )}
      >
        <div className="text-content">
          <p className="text-center title">{t('tìm hiểu và thực hiện')}</p>
          <p className="margin-bottom">
            {t('để hiểu')}
            <br />
            {t('số liệu')}
            <br />
            {t('để có số liệu')}
            <br />
            {t('thao tác kỹ thuật')}
            <br />
            {t('bạn phải thực hiện')}
          </p>
        </div>
        <div className="btn-back btn-position">
          <IonButton color="primary">{t('update')}</IonButton>
        </div>
        <div className="btn-back btn-position">
          <IonButton color="primary" onClick={() => history.push('/processparticipation')}>
            {t('Tiện ích của ví')}
          </IonButton>
        </div>
      </Layout>
    );
  }
}
ImportantWork.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(ImportantWork);
