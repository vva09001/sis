import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import ContentTitle from 'container/Common/ContentTitle';
import { CheckBook, ButtonNumber, ButtonDate, CardID } from 'components/common';
class SearcherTheWife extends Component {
  render() {
    return (
      <Layout
        title="Người tra cứu là Vợ của Nam giới được
        hưởng quyền lợi BHXH vợ sinh con. Người vợ tra cứu quyền lợi cho chồng ngay trên App điện thoại của mình"
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
            <div className="numberChildren">
              <span>Ngày nghỉ hàng tuần của chồng bạn </span>
              <ButtonNumber />
            </div>
            <div>
              <p>Ngày bắt đầu nghỉ hưởng chế độ của chồng bạn</p>
              <ButtonDate />
            </div>
            <div>
              <p>Ngày cuối cùng nghỉ hưởng chế độ chồng bạn</p>
              <ButtonDate />
            </div>
            <div>
              <p>Ngày bạn sinh con</p>
              <ButtonDate />
            </div>
            <div>
              <p>Phương thức sinh con</p>
              <CheckBook labelName="Phẫu thuật" />
              <CheckBook labelName="Sinh con thường" />
            </div>
            <div>
              <p>Bạn mang thai bao nhiêu tháng thì sinh con</p>
              <CheckBook labelName="Trên 8 tháng mang thai" />
              <CheckBook labelName="Dưới 8 tháng mang thai" />
            </div>
            <div className="input">
              <p>Số chứng minh thư hoặc thẻ căn cước của vợ</p>
              <CardID />
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default SearcherTheWife;
