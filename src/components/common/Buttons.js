import React from 'react';
import PropTypes from 'prop-types';
import { IonText } from '@ionic/react';
const Button = props => {
  return (
    <div className="button-container">
      <div className="button-left">
        <IonText>
          <p>{props.number}</p>
        </IonText>
      </div>
      <div className="button">{props.title}</div>
    </div>
  );
};

Button.propTypes = {
  number: PropTypes.number,
  title: PropTypes.string
};
export default Button;
