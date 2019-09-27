// BHYT trả 100% tỉnh

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import { IonButton } from '@ionic/react';
import PropTypes from 'prop-types';
import history from 'utils/history';

class Pay100Province extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Trường hợp được bảo hiểm y tế thanh toán 100% chi phí khám chữa bệnh')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p className="text-blue text-bold">{t('Trường hợp 1 Bạn sẽ được thanh toán 100%')}</p>
          <ol>
            <li>
              <p>{t('Trẻ em dưới 6 tuổi')}</p>
            </li>
            <li>
              <p>{t('Đối với người có công với cách mạng')}</p>
            </li>
            <li>
              <p>
                {t('Đối tượng đang công tác trong lực lượng Công an nhân dân, Quân đội nhân dân')}
              </p>
            </li>
            <li>
              <p>{t('Đối tượng khám bệnh, chữa bệnh tại tuyến xã')}</p>
            </li>
          </ol>
          <div className="btn-submit">
            <IonButton>
              <p>
                {t('Nếu bạn thuộc trường hợp trên, quyền lợi BHYT')}
                <br />
                {t('trái tuyến, vượt tuyến tại bệnh viện Tỉnh là')}
              </p>
            </IonButton>
          </div>
          <p className="text-blue text-bold">
            {t('Trường hợp 2 Bạn dã tham gia BHYT dủ từ 05 năm trở len')}
          </p>
          <p className="text-bold">{t('Điều kiện bổ xung:')}</p>
          <ol>
            <li>
              <p>
                {t(
                  'NLĐ trong 05 năm gần đấy, không có thời gian bị gián đoạn không tham gia BHXH quá 03 tháng'
                )}
              </p>
            </li>
            <li>
              <p>
                {t(
                  'NLĐ  phải khám bệnh đúng tuyến tại cơ sở khám chữa bệnh đăng ký ban đầu  từ 05 năm trở lên'
                )}
              </p>
            </li>
            <li>
              <p>{t('Tổng cộng các chi phí khám chữa bệnh những lần trước')}</p>
            </li>
          </ol>
          <div className="btn-submit">
            <IonButton>
              <p>
                {t('Nếu bạn thuộc trường hợp trên, thoả mãn 3 điều')}
                <br />
                {t('kiện bổ sung, thì quyền lợi BHYT trái tuyến,')}
                <br />
                {t('vượt tuyến tại bệnh viện Tỉnh là')}
              </p>
            </IonButton>
          </div>
          <p className="text-blue text-bold">
            {t('Trường hợp 3 Nếu bạn không thuộc 02 trường hợp nêu trên')}
          </p>
        </div>
      </Layout>
    );
  }
}

Pay100Province.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(Pay100Province);
