import React, { Component } from 'react';
import LayoutAwareness from 'container/Layout/LayoutAwareness';
class Action extends Component {
  render() {
    return (
      <LayoutAwareness
        Box1text1="Tác dụng của Ví QL BHXH cá nhân là gì?"
        Box2Toptext1="Giúp người lao động hiểu rõ hơn quyền lợi"
        Box2Toptext2="BHXH của mình. Đòi quyền lợi được hưởng"
        Box2Tottext3="khi đủ điều kiện hưởng, khi xảy ra vấn đề."
        Box2Midtext1="Không bao giờ bị qua mặt, bị lời hứa xuông từ"
        Box2Midtext2="bất kỳ ai (người phụ trách BHXH, người sử"
        Box2Midtext3="dụng lao động). Luôn biết sẽ phải làm gì,"
        Box2Midtext4="đi đến đâu, bao giờ xong, pháp lý nào hỗ trợ mình…"
        Box2Bottext1="Tra cứu 24/7 tất cả quyền lợi BHXH"
        Box2Bottext2="cá nhân, hỗ trợ tiện ích giải quyết nhanh gọn thủ tục."
        to="/awareness"
      />
    );
  }
}

export default Action;
