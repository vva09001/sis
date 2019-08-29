//Ql hưởng BHXH sinh con
import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class BirthBenefits extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Quyền lợi hưởng BHXH – Sinh con')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="cardInfo">
          <p>{t('quy định thời gian nghỉ sinh con')}</p>
          <p>
            {t('quy định thời gian đóng BHXH')} <br />
            {t('lao động nữ phải')}
          </p>
          <p>{t('trường hợp lao động nữ phải nghỉ việc')}</p>
          <p>{t('chú ý')}</p>
          <p>{t('các trường hợp trong quyền lợi hưởng BHXH')}</p>
          <p>{t('trong trường hợp nghỉ 06 tháng')}</p>
        </div>
      </Layout>
    );
  }
}
BirthBenefits.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(BirthBenefits);
