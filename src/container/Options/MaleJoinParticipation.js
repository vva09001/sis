//quyền lợi nam giớ có vợ tham gia BHXH

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class MaleJoinParticipation extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Quyền lợi nam giới có vợ tham gia BHXH')}
        contentTitle={t('Có hai trường hợp sảy ra khi tra cứu quyền lợi BHXH này')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="btn-options">
          <Buttons number={1} click={() => history.push('/search_themale')}>
            {t('người tra cứu quyền lợi')}
          </Buttons>
          <Buttons number={2} click={() => history.push('/search_thewife')}>
            {t('người tra cứu là vợ')}
          </Buttons>
        </div>
      </Layout>
    );
  }
}

MaleJoinParticipation.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(MaleJoinParticipation);
