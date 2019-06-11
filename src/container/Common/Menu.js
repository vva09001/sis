import React from 'react';
import { IonButton, IonIcon, IonText } from '@ionic/react';
import history from 'utils/history';

const Menu = () => (
  <div className="menu" id="myFixZone">
    <IonButton shape="round" onClick={() => history.push({ pathname: '/' })}>
      <IonIcon slot="start" name="home" />
      <IonText>Home</IonText>
    </IonButton>
    <IonButton color="light" shape="round" onClick={() => history.push({ pathname: '/my' })}>
      <IonIcon color="tertiary" slot="start" name="star" />
      <IonText>My</IonText>
    </IonButton>
    <IonButton color="light" shape="round" onClick={() => history.push({ pathname: '/all' })}>
      <IonIcon color="tertiary" slot="start" name="paw" />
      <IonText>All</IonText>
    </IonButton>
  </div>
);

export default Menu;
