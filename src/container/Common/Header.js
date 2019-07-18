import React from 'react';
import PropTypes from 'prop-types';
import { IonHeader, IonToolbar, IonText } from '@ionic/react';

const Header = props => {
  return (
    <React.Fragment>
      <div className="header">
        <IonHeader>
          <IonToolbar>
            <img src="img/LOGOSIS.png" width="170" alt="logo" />
            <IonText>
              <p>{props.title}</p>
            </IonText>
            <div className="header-sub">
              <p>{props.content}</p>
              <p>{props.content2}</p>
            </div>
          </IonToolbar>
        </IonHeader>
      </div>
      {props.showRectang ? <div className="btnRectang">{props.rectangNumber}</div> : null}
    </React.Fragment>
  );
};
Header.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node,
  content2: PropTypes.node,
  rectangNumber: PropTypes.number,
  showRectang: PropTypes.bool
};
export default Header;
