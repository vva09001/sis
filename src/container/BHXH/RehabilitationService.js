import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
class RehabilitationService extends Component {
  render() {
    return (
      <Layout
        cardName="contentBoder"
        title="Đăng ký dịch vụ thủ tục BHXH Nam giới có vợ sinh con"
        btnColor="primary"
        to="/noParticipation"
        btnName="Tiếp tục"
      >
        <div className="cardInfo">
          <p>
            Theo quy định BHXH, cá nhân bạn không thể tự đi giải quyết quyền lợi này được. Việc này
            phải do cán bộ phụ trách BHXH trong đơn vị (DN) bạn thực hiện
          </p>
          <p>
            Nhưng có thể có các trường hợp: cán bộ phụ trách BHXH nghiệp vụ quá yếu, hoặc vô trách
            nhiệm, hoặc vì lý do có chủ đích gì khác khiến việc hưởng quyền lợi BHXH của bạn bị trậm
            trễ, bạn không thể đợi lâu hơn được nữa
          </p>
          <p>
            Vậy chỉ còn cách bạn phải tự biết quy trình giải quyết thủ tục, có hồ sơ soạn sẵn cho
            bạn. Bạn chỉ việc mang lên VP đơn vị (DN) yêu cầu cán bộ phụ trách BHXH giải quyết, đồng
            thời giám sát cho đến khi xong việc cho bạn.
          </p>
        </div>
      </Layout>
    );
  }
}

export default RehabilitationService;
