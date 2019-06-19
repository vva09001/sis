import React from 'react';
import PropTypes from 'prop-types';
import { IonHeader, IonToolbar, IonText } from '@ionic/react';
// import history from 'utils/history';

const Header = props => {
  return (
    <div className="header">
      <IonHeader>
        <IonToolbar>
          <img src="img/LOGOSIS.png" width="170" alt="logo" />
          <IonText>
            <p>{props.title}</p>
          </IonText>
        </IonToolbar>
      </IonHeader>
    </div>
  );
};
Header.propTypes = {
  title: PropTypes.string
};
export default Header;
