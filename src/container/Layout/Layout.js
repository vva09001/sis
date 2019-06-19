import React from 'react';
import PropTypes from 'prop-types';
import Header from 'container/Common/Header';
import { IonContent, IonButton, IonCardTitle } from '@ionic/react';
import { Link } from 'react-router-dom';

const Layout = props => {
  return (
    <div className="layout">
      <IonContent>
        <Header title={props.title} />
        <div className={props.cardName}>
          <div className="card">
            {props.contentTitle === null ? null : <IonCardTitle>{props.contentTitle}</IonCardTitle>}
            {props.children}
            <div className="btn--black">
              <Link to={props.to}>
                <IonButton color={props.btnColor}>{props.btnName}</IonButton>
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
  btnColor: PropTypes.string,
  btnName: PropTypes.string
};
Layout.defaultProps = {
  contentTitle: null,
  cardName: 'content'
};

export default Layout;
