import React from 'react';
import PropTypes from 'prop-types';
import Header from 'container/Common/Header';
import Loading from 'components/Loading';
import { IonContent, IonButton, IonCardTitle } from '@ionic/react';

const SickLayout = props => {
  return (
    <div className="layout SickLayout">
      <IonContent>
        <Header title={props.title} content={props.content} />
        <div className={props.cardName}>
          <div className="card">
            {props.contentTitle === null ? null : <IonCardTitle>{props.contentTitle}</IonCardTitle>}
            {props.children}
            <div className="btn--black">
              <IonButton color={props.btnColor} onClick={props._onClick}>
                {props.loading ? <Loading /> : props.btnName}
              </IonButton>
            </div>
          </div>
        </div>
      </IonContent>
    </div>
  );
};

SickLayout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  to: PropTypes.string,
  contentTitle: PropTypes.string,
  t: PropTypes.func,
  cardName: PropTypes.string,
  btnColor: PropTypes.string,
  btnName: PropTypes.string,
  content: PropTypes.string,
  _onClick: PropTypes.func,
  loading: PropTypes.bool
};
SickLayout.defaultProps = {
  contentTitle: null,
  cardName: 'content',
  loading: false
};

export default SickLayout;
