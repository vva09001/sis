import React from 'react';
import { IonAlert } from '@ionic/react';
import PropTypes from 'prop-types';

const PopupWarning = props => {
  return (
    <IonAlert
      isOpen={props.show}
      onDidDismiss={props.onDidDismiss}
      header={'Alert'}
      subHeader={'Subtitle'}
      message={'This is an alert message.'}
      buttons={['Cancel']}
    />
  );
};

PopupWarning.propTypes = {
  show: PropTypes.bool,
  onDidDismiss: PropTypes.func
};
export default PopupWarning;
