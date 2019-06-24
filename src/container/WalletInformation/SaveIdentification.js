import React, { Component } from 'react';
import Layout from '../Layout/LayoutButtons';
import { IonButton, IonInput } from '@ionic/react';
import { Link } from 'react-router-dom';

class SaveWallet extends Component {
  render() {
    return (
      <Layout
        title="Thông tin định danh Ví"
        sussget="Thông tin số điện thoại đăng nhập và mật khẩu khi bạn cần sửa lại, sẽ có phần chỉnh sửa thông tin ở cuối cùng của Ví"
        btnColor="light"
        btnName="Quay về"
        to="optionsregister"
      >
        <div className="form">
          <div className="text-box">
            <div className="input-custom">
              <IonInput inputmode="numeric" placeholder="Mã số BHXH của bạn" />
            </div>
            <div className="btn-save">
              <IonButton color="warning">Lưu</IonButton>
            </div>
            <div className="btn-forget">
              <IonButton>
                <Link to="/forgotinsurrance">Quên mã số</Link>
              </IonButton>
            </div>
          </div>
          <div className="text-box">
            <div className="input-custom">
              <IonInput inputmode="numeric" placeholder="Số điện thoại của bạn" />
            </div>
            <div className="btn-save">
              <IonButton color="warning">Lưu</IonButton>
            </div>
          </div>
          <div className="text-box">
            <div className="input-custom">
              <IonInput placeholder="Mật khẩu sử dụng" />
            </div>
            <div className="btn-save">
              <IonButton color="warning">Lưu</IonButton>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default SaveWallet;
