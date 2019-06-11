import React from 'react';
import PropTypes from 'prop-types';
import { IonContent } from '@ionic/react';
const Authpage = props => {
  return (
    <div className="auth-page">
      <IonContent>{props.children}</IonContent>
    </div>
  );
};

Authpage.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default Authpage;
