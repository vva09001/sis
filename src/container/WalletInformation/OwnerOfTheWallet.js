//chủ nhân của ví
import React, { Component } from 'react';
import Layout from '../Layout/LayoutOptions';
import { IonButton } from '@ionic/react';
import history from 'utils/history';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class InfoOTP extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Chúc mừng bạn đã trở thành chủ nhân của ví điện tử quản lý BHXH')}
        content="Mọi dữ liệu tra cứu và tính toán Ví đều căn cứ trên số liệu BHXH của cá nhân bạn đã lưu trữ trên trang điện tử của BHXH Việt nam, kết hợp cùng với các văn bản pháp luật quy định quyền lợi BHXH, trên nền trí tuệ nhân tạo thông minh của Ví, các  mức hưởng quyền lợi BHXH của NLĐ sẽ hiện ra sau mỗi nút bấm đăng nhập của bạn"
        content2="Ví điện tử QL BHXH luôn bên bạn như một luật sư, công cụ tiện tích hữu dụng bảo vệ quyền lợi cho bạn mọi lúc mọi nơi, 24/7"
      >
        <div className="text-content">
          <h1 className="text-center sub-title">{t('Số hiệu ví của bạn')}</h1>
          <h1 className="text-center sub-title orange">{t('AA15')}</h1>
          <p className="text-center sub-content">
            {t('Đây cũng là mã số thành viên Ví chính thức của bạn')}
          </p>
          <div className="box-content background-right">
            {t('Không còn sợ thiếu sự hiểu biết về BHXH')}
          </div>
          <div className="box-content background-left">
            {t('Không còn sợ bị mất quyền lợi hưởng BHXH nữa')}
          </div>
        </div>
        <div className="btn-back btn-position">
          <IonButton color="light" onClick={() => history.goBack()}>
            {t('back')}
          </IonButton>
        </div>
      </Layout>
    );
  }
}
InfoOTP.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(InfoOTP);
