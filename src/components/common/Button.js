import React from 'react';
import PropTypes from 'prop-types';
import { IonText } from '@ionic/react';
import '../../style/buttons.scss';

const Button = props => {
  const className = `sis-button-${props.type}`;
  return (
    <div className={className}>
      <div className="head">
        <IonText>
          <p>{props.number}</p>
        </IonText>
      </div>
      <div className="body" onClick={props.click}>
        {props.children}
      </div>
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  number: PropTypes.number,
  children: PropTypes.node,
  click: PropTypes.func
};
export default Button;
