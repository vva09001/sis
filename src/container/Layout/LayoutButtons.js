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
                {props.headerTo && (
                  <IonButton>
                    <Link to={props.headerTo}>Tìm hiểu thêm</Link>
                  </IonButton>
                )}
              </div>
            </IonToolbar>
          </IonHeader>
        </div>
        <div className="content">
          {props.children}
          <div className="btn--black">
            {props.btnName && (
              <IonButton onClick={props._onClick} color={props.btnColor}>
                {props.btnName}
              </IonButton>
            )}
          </div>
        </div>
      </IonContent>
    </div>
  );
};

LayoutOptions.propTypes = {
  title: PropTypes.string,
  sussget: PropTypes.node,
  children: PropTypes.node,
  to: PropTypes.string,
  btnColor: PropTypes.string,
  btnName: PropTypes.string,
  headerTo: PropTypes.string,
  _onClick: PropTypes.func
};
export default LayoutOptions;
