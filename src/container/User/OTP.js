import React, { Component } from 'react';
import Layout from '../Layout/LayoutOptions';
import { IonInput, IonButton } from '@ionic/react';
import history from 'utils/history';

class OTP extends Component {
  render() {
    return (
      <Layout title="Lưu số điện thoại đã đăng kí nhận mã tra cứu OTP">
        <div className="text-box">
          Trường hợp bạn đã có số điện thoại đăng ký với BHXH để nhận mã tra cứu OTP
        </div>
        <div className="input-phone">
          <div className="input">
            <IonInput placeholder="Nhập sđt đã đăng kí BHXH" inputmode="numeric" />
          </div>
          <IonButton>Lưu thông tin</IonButton>
        </div>
        <div className="text-box">
          Trường hợp nếu bạn chưa hiểu, chưa đăng ký với cơ quan BHXH số điện thoại nhận mã tra cứu
          OTP
        </div>
        <div className="btn-find">
          <IonButton>Tìm hiểu thêm</IonButton>
        </div>
        <div className="btn-back">
          <IonButton color="light" onClick={() => history.goBack()}>
            Quay về
          </IonButton>
        </div>
      </Layout>
    );
  }
}

export default OTP;
