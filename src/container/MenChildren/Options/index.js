// QL nam giới có vợ sinh con

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class MenChildren extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Quyền lợi hưởng BHXH - Nam giới vợ sinh con')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="btn-options">
          <Buttons number={1} click={() => history.push('/options_wifejoin')}>
            {t('Trường hợp Nam giới có vợ tham gia BHXH')}
          </Buttons>
          <Buttons number={2} click={() => history.push('/options_wifenotparticipating')}>
            {t(
              'Trường hợp nam giới có vợ không tham gia BHXH, hoặc vợ không đủ điều kiện hưởng quyền lợi thai sản'
            )}
          </Buttons>
          <Buttons number={3} click={() => history.push('/pregnancyexamination')}>
            {t('Đăng kí dịch vụ')}
          </Buttons>
        </div>
      </Layout>
    );
  }
}

MenChildren.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(MenChildren);
