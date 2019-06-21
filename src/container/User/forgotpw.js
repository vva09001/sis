import React, { Component } from 'react';
import AuthPage from '../Layout/Authpage';
import { IonButton } from '@ionic/react';
class ForgotPW extends Component {
  render() {
    return (
      <AuthPage>
        <div className="forgotpw-wrap">
          <img src="img/user.png" alt="icon_user" className="img-login" />
          <div className="content">
            <h2>Bạn Quên Mật Khẩu</h2>
            <p>
              Ví sẽ gửi vào mail, zalo của bạn
              <br /> mật khẩu bạn đã đăng ký với Ví
            </p>
            <div className="btn-getpw">
              <IonButton>
                Nhận lại mật khẩu <br />
                đã đăng ký
              </IonButton>
            </div>
            <div className="btn-login">
              <IonButton color="light">Đăng nhập</IonButton>
            </div>
          </div>
        </div>
      </AuthPage>
    );
  }
}

export default ForgotPW;
