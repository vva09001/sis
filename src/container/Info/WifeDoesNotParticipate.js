// Ql nam giới có vợ không tham gia bảo hiểm
import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
class WifeDoesNotParticipate extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t(
          'Trường hợp Nam giới Vợ không tham gia BHXH, hoặc không đủ điều kiện hưởng quyền lợi thai sản thì được hưởng quyền lợi thai sản theo vợ thế nào ?'
        )}
        btnColor="light"
        to="/search_noParticipation"
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p>{t('điều kiện nam giới không tham gia')}</p>
          <p>{t('trường hợp nam giới không tham gia')}</p>
          <p>
            {t('quyền lợi được hưởng không tham gia')}
            <br />
            {t('quyền lợi được hưởng không tham gia 01')}
          </p>
          <p>
            {t('thời gian được nghỉ theo quyền lợi')}
            <br />
            {t('thời gian được nghỉ theo quyền lợi 01')}
            <br />
            {t('thời gian được nghỉ theo quyền lợi 02')}
            <br />
            {t('thời gian được nghỉ theo quyền lợi 03')}
            <br />
            {t('thời gian được nghỉ theo quyền lợi 04')}
            <br />
            {t('thời gian được nghỉ theo quyền lợi 05')}
          </p>
          <p>{t('Lưu ý')}</p>
        </div>
      </Layout>
    );
  }
}
WifeDoesNotParticipate.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(WifeDoesNotParticipate);
