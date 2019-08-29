import React from 'react';
import PropTypes from 'prop-types';
import { IonItem, IonDatetime } from '@ionic/react';

const ButtonDay = props => {
  return (
    <div className="btnDay">
      <IonItem>
        <IonDatetime displayFormat="D" placeholder="/" onIonChange={props.pickDay} />
        <IonDatetime displayFormat="M" onIonChange={props.pickMonth} />
      </IonItem>
    </div>
  );
};

ButtonDay.propTypes = {
  pickMonth: PropTypes.func,
  pickDay: PropTypes.func
};

export default ButtonDay;
