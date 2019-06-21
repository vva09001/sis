import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
class RehabilitationService extends Component {
  render() {
    return (
      <Layout
        cardName="contentBoder"
        title="Trường hợp Nam giới có vợ tham gia BHXH được hưởng quyền lợi thai sản theo vợ thế nào ?"
        btnColor="light"
        to="/noParticipation"
        btnName="Bỏ qua"
      >
        <div className="cardInfo">
          <p>
            (1) Điều kiện Nam giới: Chỉ cần điều kiện đã tham gia đóng BHXH , đóng bao nhiêu tháng
            cũng được, không nhất thiết phải như quy định thông thường là đóng BHXH đủ từ 6 tháng
            trở lên trong 12 tháng trước khi vợ sinh
          </p>
          <p>
            (2) Quyền lợi được hưởng: - Được nghỉ 05 ngày làm việc với trường hợp sinh thường 1 con;
            - Được nghỉ 07 ngày làm việc khi vợ sinh con phải phẫu thuật hoặc sinh con dưới 32 tuần
            tuổi; - Được nghỉ 10 ngày làm việc với trường hợp sinh đôi, từ sinh ba thì thêm mỗi con
            được nghỉ thêm 3 ngày làm việc, tối đa không quá 14 ngày làm việc - Trường hợp vợ sinh
            đôi trở lên mà phải phẫu thuật thì được nghỉ 14 ngày làm việc. - Thời gian hưởng chế độ
            không tính ngày lễ, tết, nghỉ hàng tuần
          </p>
          <p>
            Lưu ý: Đối với các ngày nghỉ nê utrên, Nam giới có vợ sinh con có thể lựa chọn nghỉ liền
            các ngày hoặc nghỉ cách quãng, nhưng theo quy định chỉ được trong khoảng thời gian 30
            ngày kể từ ngày vợ sinh con, nếu có nghỉ những ngày trước khi vợ sinh con thì tính là
            nghỉ không lương, nghỉ phép của Nam giới có vợ sinh con.
          </p>
        </div>
      </Layout>
    );
  }
}

export default RehabilitationService;
