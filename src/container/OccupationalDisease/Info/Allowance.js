// tìm hiểu QL phương tiện phụ cấp

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class Allowance extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title="Tìm hiểu quyền lợi BHXH Phụ cấp cho người chăm sóc người lao động bị tai nạn lao động, bệnh nghề nghiệp"
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p>{t('Suy giảm sức khỏe')}</p>
          <p>{t('Không điều trị nội chú')}</p>
        </div>
      </Layout>
    );
  }
}

Allowance.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(Allowance);
