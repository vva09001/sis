import React, { Component } from 'react';
import AuthPage from '../Layout/Authpage';
import { IonButton } from '@ionic/react';
import history from 'utils/history';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
class ForgotInsurrance extends Component {
  render() {
    const { t } = this.props;
    return (
      <AuthPage>
        <div className="forgotinsurrance-wrap">
          <img src="img/LOGOSIS.png" width="170" alt="logo" className="img-ins" />
          <div className="content">
            <h2>{t('forgot_code_BHXH')}</h2>
            <p>
              {t(
                'Bạn tìm lại mã số BHXH trong sổ BHXH của bạn, hoặc bạn hỏi nhân sự phụ trách BHXH của DN(đơn vị) bạn là cách nhanh nhất. Nếu hai cách trên đều không được thì Ví sẽ hỗ trợ bạn tra cứu tìm kiếm lại thông qua trang Web của BHXH Việt Nam.'
              )}
            </p>
            <p>
              {t(
                'Bước 1 Nếu bạn đã biết cách tra cứu rồi thì bạn có thể bỏ qua bước 1 này. Nếu bạn chưa rõ, còn lúng túng điền vào các ô thông tin, bạn vui lòng đọc ký hướng dẫn.'
              )}
            </p>
            <IonButton class="btn-frins">{t('read_instructions')}</IonButton>
            <p>
              {t(
                'Bước 2 Sau khi đã biết và nhớ hướng dẫn cách tra cứu rồi, bạn bấm vào đường dẫn đến trang Web của BHXH Việt nam thực hiện tra cứu. Khi bạn đã biết mã số BHXH của mình rồi, bạn nhớ quay lại ưu mã số BHXH vào Ví để có thông tin định danh tra cứu cho bạn'
              )}
            </p>
            <IonButton class="btn-frins">{t('search_path')}</IonButton>
            <div className="btn-back">
              <IonButton color="light" onClick={() => history.goBack()}>
                {t('back')}
              </IonButton>
            </div>
          </div>
        </div>
      </AuthPage>
    );
  }
}

ForgotInsurrance.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(ForgotInsurrance);
