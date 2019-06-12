import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import Button from 'components/common/Buttons';
import { IonCard, IonCardTitle, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
class Page1 extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout title={t('pageTitle_01')}>
        <IonCard>
          <IonCardTitle>{t('carTitle_01')}</IonCardTitle>
          <Button number={1} title={t('options_01')} />
          <Button number={2} title={t('options_02')} />
          <div className="btn--black">
            <IonButton color="light">
              <Link to="/">{t('back')}</Link>
            </IonButton>
          </div>
        </IonCard>
      </Layout>
    );
  }
}

Page1.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(Page1);
