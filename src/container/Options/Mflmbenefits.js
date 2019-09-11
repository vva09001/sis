//Quản lý quyền lợi thai sản LĐ nữ

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class Mflmbenefits extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Quản lý Quyền lợi thai sản đối với lao động nữ')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="btn-options">
          <Buttons number={1} click={() => history.push('/antenatalcarebenefits')}>
            {t('Quyền lợi hưởng BHXH - Khám thai')}
          </Buttons>
          <Buttons number={2} click={() => history.push('/maternitybenefits')}>
            {t('Quyền lợi hưởng BHXH – Sinh con')}
          </Buttons>
          <Buttons number={3} click={() => history.push('/adoptedchild')}>
            {t('Quyền lợi hưởng BHXH – Con nuôi')}
          </Buttons>
          <Buttons number={4} click={() => history.push('/managermiscarriage')}>
            {t('Quyền lợi hưởng BHXH – Sảy thai, nạo hút thai, thai chết lưu, phá thai bệnh lý.')}
          </Buttons>
          <Buttons number={5} click={() => history.push('/contraception')}>
            {t('Quyền lợi hưởng BHXH – Tránh thai, triệt sản')}
          </Buttons>
          <Buttons number={6} click={() => history.push('/mangagersurrogacy')}>
            {t('Quyền lợi hưởng BHXH – Mang thai hộ')}
          </Buttons>
          <Buttons number={7} click={() => history.push('/rehabilitationbenefits')}>
            {t('Quyền lợi hưởng BHXH – Hồi phục sức khỏe sau sinh')}
          </Buttons>
          {/* h25 */}
          <Buttons number={8} click={() => history.push('/workbeforematernityleave')}>
            {t('Quyền lợi của LĐ nữ đi làm trước khi hết thời hạn nghỉ thai sản theo quy định')}
          </Buttons>
          <Buttons number={9} click={() => history.push('/menchildren')}>
            {t('Quyền lợi hưởng BHXH - Nam giới vợ sinh con')}
          </Buttons>
        </div>
      </Layout>
    );
  }
}

Mflmbenefits.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(Mflmbenefits);
