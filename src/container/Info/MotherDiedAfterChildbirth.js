//mẹ chết sau khi sinh con

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ContentTitle from 'container/Common/ContentTitle';
import history from 'utils/history';

class MotherDiedAfterChildbirth extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title="Quyền lợi hưởng BHXH – Phục dưỡng phục hồi sức khỏe sau thai sản"
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <ContentTitle>{t('vì đây là trường hợp đặc biệt')}</ContentTitle>
          <p>
            {t('tuy nhiên')} <br />
            <span className="text-blue">{t('1.')}</span>
            <br />
            {t('thời gian nghỉ làm việc')}
            <br />
            {t('mức tiền hưởng')}
          </p>
          <p>
            <span className="text-blue">{t('2.')}</span>
            <br />
            {t('thời gian nghỉ làm việc')}
            <br />
            {t('mức tiền hưởng của cha')}
          </p>
          <p>
            <span className="text-blue">{t('3.')}</span>
            <br />
            {t('thời gian nghỉ làm việc')}
            <br />
            {t('mức tiền hưởng')}
          </p>
          <p>
            <span className="text-blue">{t('4.')}</span>
            <br />
            {t('thời gian nghỉ làm việc')}
            <br />
            {t('mức tiền hưởng của cha')}
          </p>
          <p>
            <span className="text-blue">{t('5.')}</span>
            <br />
            {t('thời gian nghỉ làm việc')}
            <br />
            {t('mức tiền hưởng của cha')}
          </p>
        </div>
      </Layout>
    );
  }
}

MotherDiedAfterChildbirth.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(MotherDiedAfterChildbirth);
