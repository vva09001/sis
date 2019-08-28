//menu

import React, { Component } from 'react';
import Layout from 'container/Layout/LayoutButtons';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class Mflmbenefits extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout title={t('Quản lý Quyền lợi thai sản đối với lao động nữ')}>
        <div className="btn-options">
          <Buttons number={1} click={() => history.push('/mbenefits')}>
            {t('Kiểm tra và tính toán quyền lợi BHXH thai sản')}
          </Buttons>
          <Buttons number={2}>{t('Kiểm tra và tính toán quyền lợi BHXH ốm đau')}</Buttons>
          <Buttons number={3}>
            {t('Kiểm tra và tính toán quyền lợi BHXH tai nạn bệnh nghề nghiệp')}
          </Buttons>
          <Buttons number={4}>{t('Kiểm tra và tính toán quyền lợi Bảo Hiểm thất nghiệp')}</Buttons>
          <Buttons number={5}>{t('Kiểm tra và tính toán quyền lợi BHXH một lần')}</Buttons>
          <Buttons number={6}>{t('Kiểm tra và tính toán quyền lợi Bảo Hiểm Y Tế')}</Buttons>
          <Buttons number={7}>{t('Kiểm tra và tính toán quyền lợi BHXH Hưu trí')}</Buttons>
          <Buttons number={8}>
            {t('Kiểm tra và tính toán quyền lợi BHXH được hưởng khi thân nhân tử tuất')}
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
