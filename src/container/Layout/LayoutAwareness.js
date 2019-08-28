import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IonContent, IonText, IonButton } from '@ionic/react';

const LayoutAwareness = props => {
  return (
    <div className="awarenessPage">
      <IonContent>
        <div className="header">
          <div>
            <img src="img/LOGOSIS.png" alt="logo" width="170" />
          </div>
        </div>
        <div className="contentAwareness">
          <div className="box1">
            <IonText>
              <p>{props.Box1text1}</p>
              <p>{props.Box1text2}</p>
              <p>{props.Box1text3}</p>
            </IonText>
          </div>
          <div className="box2">
            <div className="textRight">
              <IonText>
                <p>{props.Box2Toptext1}</p>
                <p>{props.Box2Toptext2}</p>
                <p>{props.Box2Toptext3}</p>
              </IonText>
            </div>
            <div className="textLeft">
              <IonText>
                <p>{props.Box2Midtext1}</p>
                <p>{props.Box2Midtext2}</p>
                <p>{props.Box2Midtext3}</p>
              </IonText>
            </div>
            <div className="textRight">
              <IonText>
                <p>{props.Box2Bottext1}</p>
                <p>{props.Box2Bottext2}</p>
                <p>{props.Box2Bottext3}</p>
              </IonText>
            </div>
          </div>
        </div>
        <div className="btn-back">
          <Link to={props.to}>
            <IonButton>Tiếp theo</IonButton>
          </Link>
        </div>
      </IonContent>
    </div>
  );
};

LayoutAwareness.propTypes = {
  Box1text1: PropTypes.string,
  Box1text2: PropTypes.string,
  Box1text3: PropTypes.string,
  Box2Toptext1: PropTypes.string,
  Box2Toptext2: PropTypes.string,
  Box2Toptext3: PropTypes.string,
  Box2Midtext1: PropTypes.string,
  Box2Midtext2: PropTypes.string,
  Box2Midtext3: PropTypes.string,
  Box2Bottext1: PropTypes.string,
  Box2Bottext2: PropTypes.string,
  Box2Bottext3: PropTypes.string,
  to: PropTypes.string
};

export default LayoutAwareness;
