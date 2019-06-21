import React, { Component } from 'react';
import AuthPage from '../Layout/Authpage';
import { IonButton } from '@ionic/react';
class ForgotInsurrance extends Component {
  render() {
    return (
      <AuthPage>
        <div className="forgotinsurrance-wrap">
          <img src="img/LOGOSIS.png" width="170" alt="logo" className="img-ins" />
          <div className="content">
            <h2>Bạn Quên Mã Số BHXH</h2>
            <p>
              Ví sẽ gửi vào email của bạn, mật khẩu bạn đã đăng ký vs <br />
              ví Ví sẽ gửi vào email của <br />
              bạn, mật khẩu bạn đã đăng ký vs <br />
              ví Ví sẽ gửi vào email của <br />
            </p>
            <p>
              Bước 1: gửi vào email của bạn, mật khẩu bạn đã đăng ký vs <br />
              ví Ví sẽ gửi vào email của <br />
              bạn, mật khẩu bạn đã đăng ký vs <br />
            </p>
            <IonButton class="btn-frins">Đọc hướng dẫn</IonButton>
            <p>
              Bước 2: gửi vào email của bạn, mật khẩu bạn đã đăng ký vs <br />
              ví Ví sẽ gửi vào email của <br />
              bạn, mật khẩu bạn đã đăng ký vs <br />
            </p>
            <IonButton class="btn-frins">Đường dẫn tra cứu</IonButton>
            <div className="btn-back">
              <IonButton>Quay về</IonButton>
            </div>
          </div>
        </div>
      </AuthPage>
    );
  }
}

export default ForgotInsurrance;
