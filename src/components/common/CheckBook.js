import React from 'react';
import { IonCheckbox, IonLabel } from '@ionic/react';
import PropTypes from 'prop-types';
const CheckBok = props => {
  return (
    <div className="checkBoox">
      <IonCheckbox slot="start" color="danger" value={props.value} checked="false" />
      <IonLabel>{props.labelName}</IonLabel>
    </div>
  );
};

CheckBok.propTypes = {
  value: PropTypes.string,
  labelName: PropTypes.string
};

export default CheckBok;
