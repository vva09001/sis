// quản lý hưởng BHYT

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class ManagerMedicalInsurance extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Quản lý hưởng quyền lợi BHXH Bảo hiểm Y Tế')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="btn-options">
          <Buttons number={1} click={() => history.push('/check_medicalinsurance')}>
            {t('Kiểm tra quá trình tham gia BHYT')}
          </Buttons>
          <Buttons number={2} click={() => history.push('/options_wifenotparticipating')}>
            {t('Kiểm tra quyền lợi BHYT thời điểm hiện tại của bạn có được giải quyết không')}
          </Buttons>
          <Buttons number={3} click={() => history.push('/options_wifenotparticipating')}>
            {t(
              'Các trường hợp mất thẻ BHYT, thẻ BHYT bị rách thẻ BHYT hết hạn liên quan đến giải quyết quyền lợi BHYT thế nào.'
            )}
          </Buttons>
          <Buttons number={4} click={() => history.push('/options_wifenotparticipating')}>
            {t('Quyền lợi BHYT – Khám bệnh, chữa bệnh NLĐ có thẻ BHYT')}
          </Buttons>
          <Buttons number={5} click={() => history.push('/options_wifenotparticipating')}>
            {t('Quyền lợi BHYT – Khám bệnh, chữa bệnh NLĐ không có thẻ BHYT')}
          </Buttons>
          <Buttons number={6} click={() => history.push('/options_wifenotparticipating')}>
            {t('Quyền lợi BHYT – Khám bệnh để sang lọc chẩn đoán sớm một số bệnh')}
          </Buttons>
          <Buttons number={7} click={() => history.push('/options_wifenotparticipating')}>
            {t('Quyền lợi BHYT – Phục hồi chức năng')}
          </Buttons>
          <Buttons number={8} click={() => history.push('/options_wifenotparticipating')}>
            {t('Quyền lợi BHYT – Khám thai nhằm mục đích điều trị')}
          </Buttons>
          <Buttons number={9} click={() => history.push('/options_wifenotparticipating')}>
            {t('Quyền lợi BHYT – Sinh con')}
          </Buttons>
          <Buttons number={10} click={() => history.push('/options_wifenotparticipating')}>
            {t(
              'Quyền lợi BHYT – Thanh toán phí vận chuyển người bệnh từ tuyến Huyện lên tuyến trến'
            )}
          </Buttons>
          {/* <Buttons number={3} click={() => history.push('/pregnancyexamination')}>
            {t('Đăng kí dịch vụ')}
          </Buttons> */}
        </div>
      </Layout>
    );
  }
}

ManagerMedicalInsurance.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(ManagerMedicalInsurance);
