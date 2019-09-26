// Tra cứ QL nam giới vợ không tham gia BHXH

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class NoParticipate extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('trường hợp vợ không tham gia')}
        contentTitle={t('Có hai trường hợp xảy ra khi tra cứu quyền lợi BHXH này')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="btn-options">
          <Buttons number={1} click={() => history.push('/search_searchMen')}>
            {t('nam giới tra cứu trên app')}
          </Buttons>
          <Buttons number={2} click={() => history.push('/search_noParticipation')}>
            {t('vợ tra cứu trên app')}
          </Buttons>
        </div>
      </Layout>
    );
  }
}

NoParticipate.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(NoParticipate);
