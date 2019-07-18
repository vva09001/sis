import React from 'react';
import PropTypes from 'prop-types';
import Header from 'container/Common/Header';
import { IonContent, IonButton, IonCardTitle } from '@ionic/react';

const Layout = props => {
  return (
    <div className="layout">
      <IonContent>
        <Header title={props.title} content={props.content} />
        <div className={props.cardName}>
          <div className="card">
            {props.contentTitle === null ? null : <IonCardTitle>{props.contentTitle}</IonCardTitle>}
            {props.children}
            <div className="btn--black">
              <IonButton color={props.btnColor} onClick={props._onClick}>
                {props.btnName}
              </IonButton>
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
  btnName: PropTypes.string,
  content: PropTypes.string,
  _onClick: PropTypes.func
};
Layout.defaultProps = {
  contentTitle: null,
  cardName: 'content'
};

export default Layout;
