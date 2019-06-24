import React, { Component } from 'react';
import Layout from '../Layout/LayoutButtons';
import { IonInput, IonButton } from '@ionic/react';
class SavePersonalInfo extends Component {
  render() {
    return (
      <Layout
        title="Lưu thông tin cá nhân"
        sussget="Hàng tháng, Ví sẽ gửi báo cáo quản lý BHXH cho bạn thông qua  mail hoặc Zalo của bạn, vậy nên bạn đăng ký với Ví một địa chỉ mail, hoặc zalo, hoặc cả hai cho chắc chắn mình luôn nhận được báo cáo. "
        btnColor="light"
        btnName="Quay về"
        to="optionsregister"
      >
        <div className="from-peson">
          <div className="phone">
            <IonInput placeholder="Họ và tên (có dấu)" />
          </div>
          <div className="user marginbottom">
            <IonInput placeholder="Giới tính" />
          </div>
          <div className="pass marginbottom">
            <IonInput placeholder="Ngày tháng năm sinh" />
          </div>
          <div className="user marginbottom">
            <IonInput placeholder="CMND/ Thẻ căn cước" />
          </div>
          <div className="pass marginbottom">
            <IonInput placeholder="Địa chỉ email" />
          </div>
          <div className="user-bootom">
            <IonInput placeholder="Số điện thoại Zalo" />
          </div>
        </div>
        <div className="btn-submit">
          <IonButton>Hoàn thành</IonButton>
        </div>
      </Layout>
    );
  }
}

export default SavePersonalInfo;
