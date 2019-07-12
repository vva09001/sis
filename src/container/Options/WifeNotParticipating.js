//nam giới có vợ không tham gi BHXH

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class WifeJoinBHXH extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t(
          'Trường hợp Nam giới Vợ không tham gia BHXH, hoặc không đủ điều kiện hưởng quyền lợi thai sản thì được hưởng quyền lợi thai sản theo vợ thế nào ?'
        )}
        btnColor="light"
        to="homepage"
        btnName={t('back')}
      >
        <div className="btn-options">
          <Buttons number={1}>{t('Tìm hiểu quyền lợi')}</Buttons>
          <Buttons number={2}>{t('Kiểm tra quyền lợi')}</Buttons>
        </div>
      </Layout>
    );
  }
}

WifeJoinBHXH.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(WifeJoinBHXH);
