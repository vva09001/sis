import React from 'react';
import { IonAlert } from '@ionic/react';
import PropTypes from 'prop-types';
import 'style/PopupSuccess.scss';

const PopupSuccess = props => {
  return (
    <IonAlert
      isOpen={props.isOpen}
      onDidDismiss={props.setShowAlert}
      header={'Thông báo'}
      message={props.message}
      buttons={['Quay về']}
    />
  );
};

PopupSuccess.propTypes = {
  isOpen: PropTypes.bool,
  setShowAlert: PropTypes.func,
  message: PropTypes.string
};
export default PopupSuccess;
