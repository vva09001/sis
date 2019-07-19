import React, { Component } from 'react';
import LayoutButtons from '../Layout/LayoutButtons';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';
class Register extends Component {
  render() {
    const { t } = this.props;
    return (
      <LayoutButtons
        title={t('THỦ TỤC ĐĂNG KÝ BAN ĐẦU ĐỂ SỬ DỤNG ĐƯỢC VÍ')}
        sussget={t(
          'Lời khuyên hữu ích để sử dụng được hết các tiện ích tra cứu của Ví, bạn hãy thật kiên trì bổ sung thông tin, và hãy thật kiên trì bổ sung thông tin ....đối với mỗi phần tiện ích. Ví không sang tạo các phần thông tin bổ sung này, mà là trong nội dung các thủ tục văn bản BHXH yêu cầu như vậy thì kế quả tính toán tra cứu của bạn mới có kết quả.'
        )}
        btnColor="primary"
        btnName={t('next')}
        _onClick={() => history.push('/info')}
      >
        <div className="button-wapper">
          <Buttons number={1} click={() => history.push('/savewallet')}>
            {t('Lưu thông tin định danh Ví')}
          </Buttons>
          <Buttons number={2} click={() => history.push('/personalinfo')}>
            {t('Lưu thông tin cá nhân cho Ví')}
          </Buttons>
          <Buttons number={3} click={() => history.push('/otp')}>
            {t('Lưu số điện thoại đã đăng ký với BHXH nhận mã tra cứu OTP')}
          </Buttons>
          <Buttons number={4} click={() => history.push('/registrationprocedure')}>
            {t(
              'Tìm hiểu và thực hiện thủ tục đăng ký hội viên để sử dụng đầy đủ chức năng và công dụng của Vi.'
            )}
          </Buttons>
          <Buttons number={5} click={() => history.push('/importantwork')}>
            {t(
              'Công việc quan trọng nhất mỗi tháng bạn phải thực hiện để Ví có cơ sở dữ liệu hoạt động'
            )}
          </Buttons>
        </div>
      </LayoutButtons>
    );
  }
}
Register.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(Register);
