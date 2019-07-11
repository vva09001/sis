import React, { Component } from 'react';
import Header from 'container/Common/Header';
import { IonContent, IonButton } from '@ionic/react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
class Time extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="time">
        <IonContent>
          <Header
            title={t('Đồng hồ đếm ngược thời gian đến thời điểm bắt đầu được nhận lương hưu')}
          />
          <div className="timeWapper">
            <div className="timeLeft">
              <div className="timeDisplay">
                <span>0</span>
              </div>
              <div className="timeDisplay">
                <span>0</span>
              </div>
              <span className="text-year">{t('year')}</span>
            </div>
            <div className="timeRight">
              <div className="timeDisplay">
                <span>0</span>
              </div>
              <div className="timeDisplay">
                <span>0</span>
              </div>
              <span className="text-month">{t('month')}</span>
            </div>
          </div>
          <div className="time-content">
            <p>
              {t(
                'Tham ra đóng BHXH nữa thì bạn mới đủ điều kiện được nhận lương hưu hàng tháng ở mức thấp nhất (=45% mức đóng BHXH hàng tháng hiện tại của bạn).'
              )}
            </p>
            <p>
              {t(
                'Nếu bạn chưa đến tuổi nghỉ hưu theo quy định (60 tuổi đối với nam, 55 tuổi đối với nữ), bạn tiếp tục đóng BHXH thì mỗi năm tỷ lệ hưởng lương hưu tăng thêm 2% đối với nam và 3% đối với nữ. Mức lương hưu tính theo tỷ lệ cao nhất sẽ bằng 75% mức đóng BHXH hàng tháng hiện tại của bạn. '
              )}
            </p>
          </div>
          <div className="btn-wrap">
            <IonButton color="light" className="time-btn__leave">
              {t('ignore')}
            </IonButton>
          </div>
        </IonContent>
      </div>
    );
  }
}
Time.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(Time);
