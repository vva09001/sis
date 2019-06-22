import React from 'react';
import { IonItem, IonDatetime } from '@ionic/react';
const ButtonDate = () => {
  return (
    <div className="date-wapper">
      <IonItem>
        <IonDatetime displayFormat="AA" placeholder="mm /" />
        <IonDatetime displayFormat="BB" placeholder="dd /" />
        <IonDatetime displayFormat="DD" placeholder="yy /" />
      </IonItem>
    </div>
  );
};

export default ButtonDate;
