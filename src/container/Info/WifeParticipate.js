// Ql nam giới có vợ tham gia bảo hiểm
import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';
class WifeDoesNotParticipate extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t(
          'Trường hợp Nam giới có vợ tham gia BHXH được hưởng quyền lợi thai sản theo vợ thế nào ?'
        )}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p>{t('điều kiện nam giới')}</p>
          <p>
            {t('quyền lợi được hưởng')}
            <br />
            {t('quyền lợi được hưởng 01')}
            <br />
            {t('quyền lợi được hưởng 02')}
            <br />
            {t('quyền lợi được hưởng 03')}
            <br />
            {t('quyền lợi được hưởng 04')}
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
