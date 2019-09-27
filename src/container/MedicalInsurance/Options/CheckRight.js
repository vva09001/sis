// kiểm tra quyền lợi BHYT;

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
// import { Buttons } from 'components/common';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class CheckRight extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Kiểm tra quyền lợi BHYT')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="cardInfo">
          <p>{t('Để bạn có thể')}</p>
          <p className="text-blue text-bold">{t('Thẻ BHYT còn hạn giá trị sử dụng')}</p>
          <p className="text-blue text-bold">{t('DN (đơn vị) nơi bạn')}</p>
          <p>{t('Để Ví tra cứu giúp bạn')}</p>
          <p className="text-bold">{t('Hướng dẫn')}</p>
          <p>{t('hướng dẫn 1')}</p>
          <p className="text-blue text-bold">{t('baohiemxahoivietnam')}</p>
          <p>{t('hướng dẫn 2')}</p>
          <p className="text-bold">{t('Bạn quay lại Ví và thao tác')}</p>
          <p>{t('thao tác 1')}</p>
          <p>{t('thao tác 2')}</p>
        </div>
      </Layout>
    );
  }
}

CheckRight.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(CheckRight);
