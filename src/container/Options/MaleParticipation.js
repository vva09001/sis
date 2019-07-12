//quyền lợi nam giới có vợ tham gia BHXH

import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

class MaleParticipation extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        title={t('Đăng ký dịch vụ thủ tục BHXH  Nam giới có vợ sinh con')}
        contentTitle={t(
          'Bạn đăng ký dịch vụ hỗ trợ thủ tục BHXH nam giới có vợ sinh con trường hợp nào ?'
        )}
        btnColor="light"
        to="homepage"
        btnName={t('back')}
      >
        <div className="btn-options">
          <Buttons number={1}>{t('trường hợp Nam giới có vợ tham gia BHXH')}</Buttons>
          <Buttons number={2}>{t('trường hợp nam giới có vợ không tham gia')}</Buttons>
        </div>
      </Layout>
    );
  }
}

MaleParticipation.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(MaleParticipation);
