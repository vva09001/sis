import React, { Component } from 'react';
import LayoutAwareness from 'container/Layout/LayoutAwareness';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
class Action extends Component {
  render() {
    const { t } = this.props;
    return (
      <LayoutAwareness
        Box1text1={t('Tác dụng của Ví QL BHXH cá nhân là gì?')}
        Box2Toptext1={t('Giúp người lao động hiểu rõ hơn quyền lợi')}
        Box2Toptext2={t('BHXH của mình. Đòi quyền lợi được hưởng')}
        Box2Tottext3={t('khi đủ điều kiện hưởng, khi xảy ra vấn đề.')}
        Box2Midtext1={t('Không bao giờ bị qua mặt, bị lời hứa xuông từ')}
        Box2Midtext2={t('bất kỳ ai (người phụ trách BHXH, người sử')}
        Box2Midtext3={t('dụng lao động). Luôn biết sẽ phải làm gì,')}
        Box2Midtext4={t('đi đến đâu, bao giờ xong, pháp lý nào hỗ trợ mình…')}
        Box2Bottext1={t('Tra cứu 24/7 tất cả quyền lợi BHXH')}
        Box2Bottext2={t('cá nhân, hỗ trợ tiện ích giải quyết nhanh gọn thủ tục.')}
        to="optionsregister"
      />
    );
  }
}

Action.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(Action);
