import React from 'react';
import PropTypes from 'prop-types';
import { IonHeader, IonToolbar, IonText } from '@ionic/react';

const HeaderButtons = props => {
  return (
    <div className="header-buttons">
      <IonHeader>
        <IonToolbar>
          <img src="img/LOGOSIS.png" width="170" alt="logo" />
          <IonText>
            <p>{props.title}</p>
          </IonText>
          <div>{props.children}</div>
        </IonToolbar>
      </IonHeader>
    </div>
  );
};
HeaderButtons.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};
export default HeaderButtons;
