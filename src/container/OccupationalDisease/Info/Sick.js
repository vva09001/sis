// tìm hiểu quản lý bệnh nghề nghiệp

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class Sick extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title="Tìm hiểu quyền lợi BHXH Bệnh nghề nghiệp"
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p className="text-blue text-bold">{t('Đối tượng áp dụng chế độ bệnh nghề nghiệp')}</p>
          <p>{t('Người làm việc theo hợp đồng')}</p>
          <p className="text-blue text-bold">
            {t('Tìm hiểu quyền lợi BHXH Bệnh nghề nghiệp')} <br />
          </p>
          <p>{t('Đk nghề nghiệp')}</p>
          <p className="text-blue text-bold">{t('được hưởng')}</p>
          <p>
            {t('Trách nghiệm')} <br />
            {t('Trả đủ tiền lương nghề nghiệp')} <br />
          </p>
          <p>
            {t('Trách nghiệm cơ quan')} <br />
            {t('Trả trợ cấp 1 lần')} <br />
            {t('Trợ cấp 1 lần')}
          </p>
        </div>
      </Layout>
    );
  }
}

Sick.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(Sick);
