import React, { Component } from 'react';
import Layout from 'container/Layout/Layout';
import Button from 'components/common/Buttons';
// import { IonCardTitle, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
class Page1 extends Component {
  render() {
    const { t } = this.props;
    return (
      <Layout
        cardName="content"
        title={t('pageTitle_01')}
        contentTitle={t('carTitle_01')}
        btnColor="light"
        to="homepage"
      >
        <Link to="info">
          <Button number={1} title={t('options_01')} />
        </Link>
        <Button number={2} title={t('options_02')} />
      </Layout>
    );
  }
}

Page1.propTypes = {
  t: PropTypes.func
};

export default withTranslation()(Page1);
