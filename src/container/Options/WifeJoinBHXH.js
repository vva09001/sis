//nam giới có vợ tham gia BHXH

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import history from 'utils/history';
import PropTypes from 'prop-types';

class WifeJoinBHXH extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t(
          'Trường hợp Nam giới có vợ tham gia BHXH được hưởng quyền lợi thai sản theo vợ thế nào ?'
        )}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="btn-options">
          <Buttons number={1} click={() => history.push('/wifeparticipate')}>
            {t('Tìm hiểu quyền lợi')}
          </Buttons>
          <Buttons number={2} click={() => history.push('/malejoinparticipation')}>
            {t('Kiểm tra quyền lợi')}
          </Buttons>
        </div>
      </Layout>
    );
  }
}

WifeJoinBHXH.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(WifeJoinBHXH);
