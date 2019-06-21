import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ContentTitle from 'container/Common/ContentTitle';
import { CheckBook, ButtonNumber, ButtonDate } from 'components/common';
class RehabilitationManagement extends Component {
  render() {
    return (
      <Layout
        title="Quyền lợi hưởng BHXH – Phục dưỡng phục hồi sức khỏe sau thai sản"
        cardName="contentBoder"
        btnColor="primary"
        to="/insbenefit"
        btnName="Hoàn thành"
      >
        <div className="cardInfo">
          <ContentTitle>
            Bạn bổ xung thêm thông tin theo quy định của BHXH để Ví kiểm tra quyền lợi và cung cấp
            dịch vụ hỗ trợ thủ tục cho bạn nhanh và chính xác nhất
          </ContentTitle>
          <div className="form">
            <div>
              <p>Bạn thuộc trường hợp nào</p>
              <CheckBook labelName="Trong quá trình sinh con phải phẫu thuật" />
              <CheckBook labelName="Thuộc trường hợp khác" />
            </div>
            <div className="numberChildren">
              <span>Số con sinh</span>
              <ButtonNumber />
            </div>
            <div>
              <p>Thời điểm diễn ra một trong 03 trường hợp nêu trên.</p>
              <ButtonDate />
            </div>
            <div>
              <p>Thời điểm trở lại làm việc sau chế độ nghỉ thai sản</p>
              <ButtonDate />
            </div>
            <div>
              <p>Thời điểm bắt đầu nghỉ dưỡng sức</p>
              <ButtonDate />
            </div>
            <div>
              <p>Thời điểm cuối cùng nghỉ dưỡng sức</p>
              <ButtonDate />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default RehabilitationManagement;
