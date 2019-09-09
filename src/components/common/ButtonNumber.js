import React from 'react';
import { IonInput } from '@ionic/react';
import PropTypes from 'prop-types';

const InputNumber = props => {
  return (
    <div className="input-number">
      <IonInput inputmode="numeric" onIonChange={props.changeNumber} />
    </div>
  );
};

InputNumber.propTypes = {
  changeNumber: PropTypes.func
};
export default InputNumber;
