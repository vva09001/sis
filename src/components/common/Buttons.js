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
      <div className="button" onClick={props.click}>
        {props.children}
      </div>
    </div>
  );
};

Button.propTypes = {
  number: PropTypes.number,
  children: PropTypes.node,
  click: PropTypes.func
};
export default Button;
