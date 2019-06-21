import React from 'react';
import { IonContent } from '@ionic/react';
import PropTypes from 'prop-types';
import { IonHeader, IonToolbar, IonText, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';

const LayoutOptions = props => {
  return (
    <div className="layout-butons">
      <IonContent>
        <div className="header">
          <IonHeader>
            <IonToolbar>
              <img src="img/LOGOSIS.png" width="170" alt="logo" />
              <IonText>
                <p>{props.title}</p>
              </IonText>
              <div>
                {props.sussget && <p className="sussget">{props.sussget}</p>}
                {props.buttonName && <IonButton>{props.buttonName}</IonButton>}
              </div>
            </IonToolbar>
          </IonHeader>
        </div>
        <div className="content">
          {props.children}
          <div className="btn--black">
            <Link to={props.to}>
              <IonButton color={props.btnColor}>{props.btnName}</IonButton>
            </Link>
          </div>
        </div>
      </IonContent>
    </div>
  );
};

LayoutOptions.propTypes = {
  title: PropTypes.string,
  sussget: PropTypes.node,
  buttonName: PropTypes.string,
  children: PropTypes.node,
  to: PropTypes.string,
  btnColor: PropTypes.string,
  btnName: PropTypes.string
};
export default LayoutOptions;
