// kết quả kiểm tra sức khỏe

import React, { Component } from 'react';
import Layout from 'container/Layout/LayoutButtons';
import { IonButton } from '@ionic/react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class HealthCheckResult extends Component {
  render() {
    const { t } = this.props;
    return (
      <React.Fragment>
        <Layout
          title={t('Kết quả khám “Sức khỏe” bảo hiểm xã hội của bạn đến tháng 8')}
          btnName={t('ignore')}
          _onClick={() => history.goBack()}
          btnColor="light"
        >
          <div className="content-position">
            <div className="health-title">
              <div className="title-center">
                <p className="no-mb text-blue mt-40">{t('Tình hình nộp tiền đóng BHXH')}</p>
                <p className="no-mt text-blue">{t('hiện tại của DN/Đơn vị bạn')}</p>
              </div>
              <p>
                {t(
                  'Đã hoàn thành đến tháng 8 năm 2019. Vậy bạn đã đủ điều kiện giải quyết các quyền lợi của mình trong tháng 8 '
                )}
              </p>
            </div>
            <div className="health-content">
              <p className="text-blue no-mb">{t('Chi tiết việc tham gia và đóng BHXH')}</p>
              <p className="text-blue no-mt">{t('tháng 8 của bạn')}</p>
              <p className="no-mt no-mb">
                {t('DN')} <span>6.56</span>
              </p>
              <p className="no-mt no-mb">{t('P/s')}</p>
              <p className="no-mt">{t('Đơn vị hàng tháng')}</p>
              <p className="no-mb">
                {t('21,5% mức lương đóng BHXH = ')}
                <span>500,000 vnđ</span>
              </p>
              <p className="no-mt no-mb">{t('Bạn tự phải đóng 10,5%  mức  lương đóng BHXH .')}</p>
              <p className="no-mt">
                {t('DN(Đơn vị) sẽ trừ vào lương hàng tháng của bạn số tiền ')}
              </p>
            </div>
            <div className="health-footter">
              <p className="no-mb text-blue">{t('Bạn có muốn Ví gửi kết quả khám sức khỏe')}</p>
              <p className="no-mt text-blue">{t('BHXH của bạn tháng 8 vào mail, zalo ?')}</p>
            </div>
          </div>
          <div className="btn-flex">
            <IonButton onClick={() => history.push('/menu')}>{t('Đồng ý')}</IonButton>
          </div>
        </Layout>
      </React.Fragment>
    );
  }
}

HealthCheckResult.propTypes = {
  t: PropTypes.func,
  data: PropTypes.array
};

export default withTranslation()(HealthCheckResult);
