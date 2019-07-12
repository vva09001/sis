//tìm hiểu QL con nuôi
import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class AdoptedManagement extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Tìm hiểu quyền lợi thai sản nữ nuôi con nuôi')}
        btnColor="light"
        to="/noParticipation"
        btnName={t('back')}
      >
        <div className="cardInfo">
          <p>{t('người lao động nhận con nuôi')}</p>
          <p>{t('mức hưởng mỗi tháng')}</p>
        </div>
      </Layout>
    );
  }
}
AdoptedManagement.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(AdoptedManagement);
