import React, { Component } from 'react';
import Layout from 'container/Layout/LayoutButtons';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
class GetOPT extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t(
          'Trường hợp bạn chưa hiểu chưa biết gì. Bạn chưa đăng ký với cơ quan BHXH số điện thoại nhận mã tra cứu OTP'
        )}
        buttonName={t('looking_for_more_information')}
        btnName={t('back')}
        headerTo="/infoOTP"
        to="/optionsregister"
        btnColor="light"
      >
        <div className="btn-options">
          <Buttons number={1}>
            {t(
              'Bạn cần đăng ký số điện thoại với BHXH trong trường hợp bạn vẫn đang làm việc tại DN(đơnvị)'
            )}
          </Buttons>
          <Buttons number={2}>
            {t(
              'Bạn cần đăng ký số điện thoại với BHXH trong trường hợp bạn đã nghỉ việc, hiện tại chưa làm việc ở đâu. Thời gian này bạn đang đóng bảo hiểm tự nguyện'
            )}
          </Buttons>
        </div>
      </Layout>
    );
  }
}
GetOPT.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(GetOPT);
