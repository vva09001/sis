import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ButtonDate from 'components/common/ButtonDate';
import { IonCheckbox, IonLabel } from '@ionic/react';

class NoParticipation extends Component {
  render() {
    return (
      <Layout
        cardName="contentBoder"
        title="Người tra cứu là Vợ của nam giới được hưởng quyền lợi BHXH vợ sinh con. Người vợ tra cứu quyền lợi cho chồng ngay trên App điện thoại của mình"
        contentTitle="Bạn bổ xung thêm thông tin theo quy định BHXH để Ví kiểm tra quyền lợi cung cấp dịch vụ hỗ trợ thủ tục cho bạn nhanh và chính xác"
        btnColor="primary"
        to="homepage"
        btnName="Hoàn thành"
      >
        <div className="form">
          <p>Ngày vợ sinh</p>
          <ButtonDate />
          <p>Phương thức sinh con</p>
          <div className="checkBoox">
            <IonCheckbox slot="start" color="danger" value="Phẫu thuật" checked="false" />
            <IonLabel>Phẫu thuật</IonLabel>
          </div>
          <div className="checkBoox">
            <IonCheckbox slot="start" color="danger" value="Sinh con thường" checked="false" />
            <IonLabel>Sinh con thường</IonLabel>
          </div>
          <div className="numberChildren">
            <p>Số con sinh</p>
            <div className="input">
              <input type="number" />
            </div>
          </div>
          <p>Số chứng minh thư hoặc thẻ căn cước của vợ</p>
          <div className="input">
            <input type="number" />
          </div>
        </div>
      </Layout>
    );
  }
}

export default NoParticipation;
