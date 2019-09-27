// quyền lợi khám chữa có BHYT;

import React, { Component } from 'react';
import Layout from 'container/Layout/SickLayout';
import { Buttons } from 'components/common';
import { IonButton } from '@ionic/react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import history from 'utils/history';

class RightHave extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="contentBoder"
        title={t('Quyền lợi BHYT - Khám bệnh, chữa bệnh có thẻ BHYT')}
        btnColor="light"
        _onClick={() => history.goBack()}
        btnName={t('back')}
      >
        <div className="cardInfo">
          <p>{t('Vấn đề sau khi khám bệnh, điều trị bệnh')}</p>
          <hr />
          <div className="btn-submit">
            <IonButton>
              <p>
                {t('Kiểm tra thâm niên đóng BHYT')}
                <br />
                {t('có giúp hưởng thêm quyền lợi đặc biệt gì không.')}
              </p>
            </IonButton>
          </div>
          <p className="text-bold ion-text-center">{t('Bạn thuộc trường hợp nào?')}</p>
          <div className="btn-options">
            <Buttons number={1} click={() => history.push('/right_route_medicalinsurance')}>
              {t('Khám chữa bệnh đúng tuyến')}
            </Buttons>
            <Buttons number={2} click={() => history.push('/wrong_route_medicalinsurance')}>
              {t('Khám chữa bệnh trái tuyến')}
            </Buttons>
            <Buttons number={3} click={() => history.push('/no_contract_medicalinsurance')}>
              {t('Khám chữa bệnh tại cơ sở khám chữa bệnh')}
            </Buttons>
          </div>
        </div>
      </Layout>
    );
  }
}

RightHave.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(RightHave);
