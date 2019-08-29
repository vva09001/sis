// quyền lợi thai sảm khi sinh con

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class Maternitybenefits extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Quyền lợi thai sản khi sinh con')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="btn-options">
          <Buttons number={1} click={() => history.push('/birthbenefits')}>
            {t('Tìm hiểu quyền lợi')}
          </Buttons>
          <Buttons number={2} click={() => history.push('/maternitycase')}>
            {t('Kiểm tra quyền lợi')}
          </Buttons>
          <Buttons number={3}>{t('Đăng kí dịch vụ')}</Buttons>
        </div>
      </Layout>
    );
  }
}

Maternitybenefits.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(Maternitybenefits);
