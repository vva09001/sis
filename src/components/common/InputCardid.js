import React from 'react';
import { IonInput } from '@ionic/react';
import PropTypes from 'prop-types';

const InputCardid = props => {
  return (
    <div className="input-cardID">
      <IonInput inputmode="numeric" onIonChange={props.changeID} />
    </div>
  );
};

InputCardid.propTypes = {
  changeID: PropTypes.func
};

export default InputCardid;
