import React from 'react';
import { IonItem, IonDatetime } from '@ionic/react';
const ButtonDate = () => {
  return (
    <div className="date-wapper">
      <IonItem>
        <IonDatetime displayFormat="CC" placeholder="mm /" />
        <IonDatetime displayFormat="EE" placeholder="dd /" />
        <IonDatetime displayFormat="QQ" placeholder="yy /" />
      </IonItem>
    </div>
  );
};

export default ButtonDate;
