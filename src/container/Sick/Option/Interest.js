//QL khi ốm đau

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class Interest extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Quyền lợi hưởng BHXH khi ốm đau')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="btn-options">
          <Buttons number={1} click={() => history.push('/sickshortday')}>
            {t('Tìm hiểu quyền lợi - Ốm đau ngắn ngày')}
          </Buttons>
          <Buttons number={2} click={() => history.push('/sicklongDay')}>
            {t('Tìm hiểu quyền lợi - Ốm đau dài ngày')}
          </Buttons>
          <Buttons number={3} click={() => history.push('/aftersick')}>
            {t('Tìm hiểu quyền lợi - Phục hồi sức khỏe sau ốm')}
          </Buttons>
          <Buttons number={4} click={() => history.push('/sickchildren')}>
            {t('Tìm hiểu quyền lợi - Con ốm')}
          </Buttons>
        </div>
      </Layout>
    );
  }
}

Interest.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(Interest);
