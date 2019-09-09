// tìm hiểu QL tai nạn LĐ

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class LaborAccident extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title="Tìm hiểu quyền lợi BHXH -  Tai nạn lao động"
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('ignore')}
      >
        <div className="cardInfo">
          <p className="text-blue text-bold">{t('Tìm hiểu quyền lợi BHXH -  Tai nạn lao động')}</p>
          <p>{t('Người làm việc theo hợp đồng')}</p>
          <p className="text-blue text-bold">
            {t('Điều kiện hưởng chế độ tai nạn lao động')} <br />
          </p>
          <p>
            {t('NLĐ đã tham gia BHXH')} <br />
            {t('Ngoài nơi làm việc')}
          </p>
          <p className="text-blue text-bold">
            {t(
              'Nếu tai nạn lao động không thuộc các điều kiện hưởng trên thì gọi là tai nạn do lỗi người lao động'
            )}
          </p>
          <p className="text-blue text-bold">{t('được hưởng')}</p>
          <p>
            {t('Trường hợp không phải do lỗi người lao động')} <br />
            {t('Trả đủ tiền lương')} <br />
            {t('Trợ cấp cho người lao động')}
          </p>
          <p>
            {t('Trách nghiệm của cơ quan BHXH:')} <br />
            {t('Trả trợ cấp 1 lần')} <br />
            {t('Trợ cấp 1 lần')}
          </p>
          <p>{t('Do lỗi người lao động')}</p>
        </div>
      </Layout>
    );
  }
}

LaborAccident.propTypes = {
  t: PropTypes.func
};
export default withTranslation()(LaborAccident);
