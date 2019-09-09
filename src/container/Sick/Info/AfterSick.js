// tiefm hiểu quyền lợi phục đưỡng phục hồi

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class AfterSick extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title="Tìm hiểu quyền lợi thai sản nữ phục dưỡng phục hồi sức khỏe sau ốm đau"
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p className="text-blue text-bold">
            {t('Điều kiện được hưởng')} <br />
          </p>
          <p>{t('NLĐ')}</p>
          <p>{t('Người lao động')}</p>
          <p className="text-blue text-bold">
            {t('Thời gian và mức hưởng')} <br />
          </p>
          <p>{t('thời gian hưởng')}</p>
          <p>{t('mức hưởng tính theo')}</p>
        </div>
      </Layout>
    );
  }
}

AfterSick.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(AfterSick);
