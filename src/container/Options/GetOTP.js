import React, { Component } from 'react';
import Layout from 'container/Layout/LayoutButtons';
import { Buttons } from 'components/common';
class GetOPT extends Component {
  render() {
    return (
      <Layout
        title="Trường hợp bạn chưa hiểu chưa biết gì. Bạn chưa đăng ký với cơ quan  BHXH số điện thoại nhận mã tra cứu OTP"
        buttonName="Tìm hiểu thêm"
        btnName="Quay về"
        headerTo="/infoOTP"
        to="/optionsregister"
        btnColor="light"
      >
        <div className="btn-options">
          <Buttons number={1}>
            Bạn cần đăng ký số điện thoại với BHXH trong trường hợp bạn vẫn đang làm việc tại
            DN(đơnvị)
          </Buttons>
          <Buttons number={2}>
            Bạn cần đăng ký số điện thoại với BHXH trong trường hợp bạn đã nghỉ việc, hiện tại chưa
            làm việc ở đâu. Thời gian này bạn đang đóng bảo hiểm tự nguyện
          </Buttons>
        </div>
        {/* <div className="guide-wapper">
          <div className="guide-title">Bạn làm theo thứ tự như sau</div>
          <div className="guide-content">
            <div className="box">Xem nguyên tắc</div>
            <div className="icon">
              <img src="img/arow.png" alt="icon" />
            </div>
            <div className="box">Thực hiện quyền giám sát công việc</div>
            <div className="icon">
              <img src="img/arow.png" alt="icon" />
            </div>
            <div className="box">Thời gian chờ nhận kết quả</div>
          </div>
        </div> */}
      </Layout>
    );
  }
}

export default GetOPT;
