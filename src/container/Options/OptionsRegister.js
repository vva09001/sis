import React, { Component } from 'react';
import LayoutButtons from '../Layout/LayoutButtons';
import { Buttons } from 'components/common';
class Register extends Component {
  render() {
    return (
      <LayoutButtons
        title="THỦ TỤC ĐĂNG KÝ BAN ĐẦU ĐỂ SỬ DỤNG ĐƯỢC VÍ"
        sussget="Lời khuyên hữu ích: để sử dụng được hết các tiện ích tra cứu 
      của Ví, bạn hãy thật kiên trì bổ sung thông tin, và hãy thật kiên trì 
      bổ sung thông tin ....đối với mỗi phần tiện ích. Ví không sang tạo 
      các phần thông tin bổ sung này, mà là trong nội dung các thủ tục văn bản
       BHXH yêu cầu như vậy thì kế quả tính toán tra cứu của bạn mới có kết quả."
        btnColor="primary"
        btnName="Tiếp theo"
        to="info"
      >
        <div className="button-wapper">
          <Buttons number={1} title="Lưu thông tin định danh Ví" />
          <Buttons number={2} title="Lưu thông tin cá nhân cho Ví" />
          <Buttons number={3} title="Lưu số điện thoại đã đăng ký với BHXH nhận mã tra cứu OTP" />
          <Buttons
            number={4}
            title="Tìm hiểu và thực hiện thủ tục đăng ký hội viên để sử dụng đầy đủ chức năng và công dụng của Vi."
          />
          <Buttons
            number={5}
            title="Công việc quan trọng nhất mỗi tháng bạn phải thực hiện để Ví có cơ sở dữ liệu hoạt động"
          />
        </div>
      </LayoutButtons>
    );
  }
}

export default Register;
