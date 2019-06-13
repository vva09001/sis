import React from 'react';
import PropTypes from 'prop-types';
import Header from 'container/Common/Header';
import { IonContent, IonButton, IonCardTitle } from '@ionic/react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

const Layout = props => {
  const { t } = props;
  return (
    <div className="layout">
      <IonContent>
        <div className="header">
          <Header title={props.title} />
        </div>
        <div className={props.cardName}>
          <div className="card">
            <IonCardTitle>{props.contentTitle}</IonCardTitle>
            {props.children}
            <div className="btn--black">
              <Link to={props.to}>
                <IonButton color={props.btnColor}>{t('back')}</IonButton>
              </Link>
            </div>
          </div>
        </div>
      </IonContent>
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  to: PropTypes.string,
  contentTitle: PropTypes.string,
  t: PropTypes.func,
  cardName: PropTypes.string,
  btnColor: PropTypes.string
};

export default withTranslation()(Layout);
