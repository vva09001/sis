import React, { Component } from 'react';
import LayoutAwareness from 'container/Layout/LayoutAwareness';
class Awareness extends Component {
  render() {
    return (
      <LayoutAwareness
        Box1text1="Nhận thức sai lầm về BHXH"
        Box1text2="khiến người lao động đang tự mất"
        Box1text3="đi quyền lợi được hưởng"
        Box2Toptext1="Cảm thấy phiền phức khi tháng nào cũng bị trừ vào"
        Box2Toptext2="lương phần trích BHXH."
        Box2Midtext1="Để phó mặc nhân sự phụ trách BHXH Công ty muốn"
        Box2Midtext2="làm gì, bảo gì biết vậy, không chịu tìm hiểu mình"
        Box2Midtext3="quyền lợi gì, khi nào"
        Box2Bottext1="Nếu biết quyền lợi, sự hữu dụng thực tế của"
        Box2Bottext2="BHXH, sự tiện ích khi sử dụng Ví điện từ này liệu"
        Box2Bottext3="bạn có quan tâm hơn"
        to="action"
      />
    );
  }
}

export default Awareness;
