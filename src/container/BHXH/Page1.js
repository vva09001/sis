import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import Button from 'components/common/Buttons';
import { IonCard, IonCardTitle, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';
class Page1 extends Component {
  render() {
    return (
      <Layout title="Đăng ký dịch vụ thủ tục BHXH Mang thai hộ">
        <IonCard>
          <IonCardTitle>Bạn đăng ký hỗ trợ thủ tục BHXH đối với trường họp nào</IonCardTitle>
          <Button number={1} title="Bạn là người mang thai hộ" />
          <Button number={2} title="Bạn là người nhờ mang thai hộ" />
          <div className="btn--black">
            <IonButton color="light">
              <Link to="/">Quay về</Link>
            </IonButton>
          </div>
        </IonCard>
      </Layout>
    );
  }
}

export default Page1;
