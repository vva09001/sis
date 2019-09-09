// Ql kiểm tra ốm đau

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class Search extends Component {
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
          <Buttons number={1} click={() => history.push('/search_sickshortday')}>
            {t('Kiểm tra quyền lợi - Ốm đau ngắn ngày')}
          </Buttons>
          <Buttons number={2} click={() => history.push('/search_sicklongday')}>
            {t('Kiểm tra quyền lợi - Ốm đau dài ngày')}
          </Buttons>
          <Buttons number={3} click={() => history.push('/search_sickrecuperate')}>
            {t('Kiểm tra quyền lợi - Phục hồi sức khỏe sau ốm')}
          </Buttons>
          <Buttons number={4} click={() => history.push('/search_sickchildren')}>
            {t('Kiểm tra quyền lợi - Con ốm')}
          </Buttons>
        </div>
      </Layout>
    );
  }
}

Search.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(Search);
