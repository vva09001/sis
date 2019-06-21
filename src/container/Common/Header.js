import React from 'react';
import PropTypes from 'prop-types';
import { IonHeader, IonToolbar, IonText } from '@ionic/react';

const Header = props => {
  return (
    <div className="header">
      <IonHeader>
        <IonToolbar>
          <img src="img/LOGOSIS.png" width="170" alt="logo" />
          <IonText>
            <p>{props.title}</p>
          </IonText>
          <div>{props.content}</div>
        </IonToolbar>
      </IonHeader>
    </div>
  );
};
Header.propTypes = {
  title: PropTypes.string,
  content: PropTypes.node
};
export default Header;
