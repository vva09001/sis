import React from 'react';
import { IonItem, IonDatetime } from '@ionic/react';
const ButtonDay = () => {
  return (
    <div className="btnDay">
      <IonItem>
        <IonDatetime displayFormat="MM" placeholder="/" />
        <IonDatetime displayFormat="DD" />
      </IonItem>
    </div>
  );
};

export default ButtonDay;
