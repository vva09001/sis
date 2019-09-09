//tìm hiểu Ql tại nạn bệnh NN

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
        title={t('Tìm hiểu quyền lợi BHXH Tai nạn - Bệnh nghề nghiệp')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="btn-options">
          <Buttons number={1} click={() => history.push('/laboraccident')}>
            {t('Tìm hiểu quyền lợi BHXH - Tai nạn lao động')}
          </Buttons>
          <Buttons number={2} click={() => history.push('/occupationaldiseasesick')}>
            {t('Tìm hiểu quyền lợi BHXH - Bệnh nghề nghiệp')}
          </Buttons>
          <Buttons number={3} click={() => history.push('/aftertheaccident')}>
            {t('Tìm hiểu quyền lợi BHXH - Phục hồi sức khỏe tai nạn, bệnh nghề nghiệp')}
          </Buttons>
          <Buttons number={4} click={() => history.push('/help')}>
            {t(
              'Tìm hiểu quyền lợi BHXH - Phương tiện hỗ trợ giúp sinh hoạt, dụng cụ chỉnh hình sau tai nạn lao động, bệnh nghề nghiệp'
            )}
          </Buttons>
          <Buttons number={5} click={() => history.push('/allowance')}>
            {t(
              'Tìm hiểu quyền lợi BHXH - Phụ cấp cho người phục vụ chắm sóc NLĐ bị tai nạn lao động nghề nghiệp'
            )}
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
