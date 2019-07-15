//Ql hưởng BHXH sinh con
import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class Childbirth extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Quyền lợi hưởng BHXH – Sinh con')}
        btnColor="primary"
        to="/search_noParticipation"
        btnName={t('continue')}
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
Childbirth.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(Childbirth);
