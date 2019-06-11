import React from 'react';
import PropTypes from 'prop-types';
import { IonFooter, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon } from '@ionic/react';
const Footer = () => {
  return (
    <IonFooter>
      <IonToolbar>
        <IonTitle class="text-gradient" color="primary">
          Your ID: 127868
        </IonTitle>
        <IonButtons slot="end">
          <IonButton slots="icon-only">
            <IonIcon color="tertiary" name="create" />
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonFooter>
  );
};
Footer.propTypes = {
  active: PropTypes.string
};
export default Footer;
