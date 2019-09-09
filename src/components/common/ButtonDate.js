import React from 'react';
import { IonItem, IonDatetime } from '@ionic/react';
import PropTypes from 'prop-types';

const ButtonDate = props => {
  return (
    <div className="date-wapper">
      <IonItem>
        <IonDatetime displayFormat="D" placeholder="dd /" onIonChange={props.pickDay} />
        <IonDatetime displayFormat="M" placeholder="mm /" onIonChange={props.pickMonth} />
        <IonDatetime displayFormat="YYYY" placeholder="yy" onIonChange={props.pickYear} />
      </IonItem>
    </div>
  );
};

ButtonDate.propTypes = {
  pickMonth: PropTypes.func,
  pickDay: PropTypes.func,
  pickYear: PropTypes.func
};

export default ButtonDate;
