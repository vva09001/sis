// tìm hiểu quyền lợi thất nghiệp

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import { IonButton } from '@ionic/react';
import PropTypes from 'prop-types';
import history from 'utils/history';

class Unemployed extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title="Tìm hiểu quyền lợi BHXH Trợ cấp thất nghiệp"
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p className="text-blue text-bold">
            {t('Điêu kiện để được hưởng trợ cấp thất nghiệp có 4 điều kiện')}
          </p>
          <p>{t('Chấm dứt hợp đồng')}</p>
          <p>{t('Đã đóng bảo hiểm thất nghiệp')}</p>
          <p>{t('Đã đóng bảo hiểm thất nghiệp trong 36 tháng')}</p>
          <p>{t('Đã nộp hồ sơ')}</p>
          <p>{t('Chưa tìm được việc')}</p>
          <p>{t('Trừ các trường hợp')}</p>
          <p className="note">{t('Chú ý')}</p>
          <div className="btn-submit">
            <IonButton>
              <p>
                {t('Nhận danh sách các TT hỗ trợ việc làm')} <br />
                {t('giải quyết trợ cấp thất nghiệp tại các tỉnh/TP')}
              </p>
            </IonButton>
          </div>
          <p className="text-blue text-bold">{t('Thời gian hưởng trợ cấp thất nghiệp')}</p>
          <p>{t('Được tính đủ số tháng')}</p>
          <p>{t('Mức hưởng trợ cấp thất nghiệp')}</p>
          <p className="text-blue text-bold">
            {t(
              'Thời điểm hưởng trợ cấp thất nghiệp được tính từ ngày thứ 16, kể từ ngày nộp đủ hồ sơ hưởng trợ cấp thất nghiệp.'
            )}
          </p>
        </div>
      </Layout>
    );
  }
}

Unemployed.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(Unemployed);
