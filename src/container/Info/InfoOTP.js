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
        title={t(
          'Trường hợp bạn chưa hiểu chưa biết gì. Bạn chưa đăng ký với cơ quan BHXH số điện thoại nhận mã tra cứu OTP'
        )}
      >
        <div className="text-content">
          <p className="text-top">
            {t(
              'Theo Quyết định số 888/QĐ-BHXH của Bảo hiểm Xã hội Việt nam, người lao động phải đăng ký số điện thoại với cơ quan BHXH để nhận mã tra cứu (OTP) đối với mỗi lần tra cứu, mục đích để bảo mật thông tin các nhân về BHXH (giống như nhận mã OTP mỗi lần chuyển khoản ngân hàng online). Đây là bước rất quan trọng bạn phải thực hiện xong thì mới thực hiện các thao tác khác trong ví cũng như tự bảo vệ quyền lợi BHXH cá nhân mình Bạn chắc chắn rằng chưa ai hỏi bạn, nhắc bạn vấn đề này, bạn hoàn toàn chưa biết'
            )}
          </p>
          <p>
            {t(
              'Nếu vậy việc đầu tiên là Bạn phải hỏi ngay nhân sự phụ trách BHXH của DN(đơn vị) bạn đang làm việc đã đăng ký số điện thoại bạn đang sử dụng với BHXH để nhận mã tra cứu OTP chưa. Nếu có rồi bạn lấy số lưu vào mục số điện thoại nhận mã OTP. Nếu bạn chưa được nhân sự phụ trách BHXH đăng ký cho bạn, Ví sẽ hướng dẫn bạn thủ tục và giá m sát công việc cho đến khi bạn nhận được kết quả.'
            )}
          </p>
          <p className="text-bottom">
            {t(
              'Theo quy định của BHXH, khi bạn đang làm việc tại DN(đơn vị) thì chỉ nhân sự phụ trách BHXH mới được thay mặt DN(đơn vị), thay mặt bạn để làm việc với BHXH hoàn thiện thủ tục này, chứ tự bạn thực hiện không được, ngoại trừ bạn đã nghỉ làm việc tại DN(đơn vị), và hiện tại bạn chưa làm việc ở đâu.'
            )}
          </p>
        </div>
        <div className="btn-back">
          <IonButton onClick={() => history.goBack()}>{t('back')}</IonButton>
        </div>
      </Layout>
    );
  }
}
InfoOTP.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(InfoOTP);
