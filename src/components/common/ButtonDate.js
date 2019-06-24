import React from 'react';
import { IonItem, IonDatetime } from '@ionic/react';
const ButtonDate = () => {
  return (
    <div className="date-wapper">
      <IonItem>
        <IonDatetime displayFormat="MM" placeholder="mm /" />
        <IonDatetime displayFormat="DD" placeholder="dd /" />
        <IonDatetime displayFormat="YY" placeholder="yy /" />
      </IonItem>
    </div>
  );
};

export default ButtonDate;
