// QLLD nữ đi làm trước khi hết thời hạn nghỉ thai sản
import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
class WorkBeforetheEndOfMaternityLeave extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title="Quyền lợi hưởng của lao động nữ đi làm trước khi hết thời hạn nghỉ thai sản theo quy định"
        btnColor="light"
        to="/noParticipation"
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p>{t('căn cứ luật BHXH')}</p>
          <p>
            {t('lao động nữ')}
            <br />
            {t('a')}
            <br />
            {t('b')}
            <br />
            {t('tiền lương')}
          </p>
          <p>{t('giải thích')}</p>
        </div>
      </Layout>
    );
  }
}

WorkBeforetheEndOfMaternityLeave.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(WorkBeforetheEndOfMaternityLeave);
