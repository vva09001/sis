import React from 'react';
import { IonAlert } from '@ionic/react';
import PropTypes from 'prop-types';
import 'style/PopupWarning.scss';

const PopupWarning = props => {
  return (
    <IonAlert
      isOpen={props.isOpen}
      onDidDismiss={props.setShowAlert}
      header={'Rất tiêc'}
      message={props.message}
      buttons={['Quay về']}
    />
  );
};

PopupWarning.propTypes = {
  isOpen: PropTypes.bool,
  setShowAlert: PropTypes.func,
  message: PropTypes.string
};
export default PopupWarning;
