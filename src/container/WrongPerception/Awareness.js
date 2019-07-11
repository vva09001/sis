import React, { Component } from 'react';
import LayoutAwareness from 'container/Layout/LayoutAwareness';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
class Awareness extends Component {
  render() {
    const { t } = this.props;
    return (
      <LayoutAwareness
        Box1text1={t('Nhận thức sai lầm về BHXH')}
        Box1text2={t('khiến người lao động đang tự mất')}
        Box1text3={t('đi quyền lợi được hưởng')}
        Box2Toptext1={t('Cảm thấy phiền phức khi tháng nào cũng bị trừ vào')}
        Box2Toptext2={t('lương phần trích BHXH.')}
        Box2Midtext1={t('Để phó mặc nhân sự phụ trách BHXH Công ty muốn')}
        Box2Midtext2={t('làm gì, bảo gì biết vậy, không chịu tìm hiểu mình')}
        Box2Midtext3={t('quyền lợi gì, khi nào')}
        Box2Bottext1={t('Nếu biết quyền lợi, sự hữu dụng thực tế của')}
        Box2Bottext2={t('BHXH, sự tiện ích khi sử dụng Ví điện từ này liệu')}
        Box2Bottext3={t('bạn có quan tâm hơn')}
        to="action"
      />
    );
  }
}

Awareness.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(Awareness);
