import React, { Component } from 'react';
import { IonAlert } from '@ionic/react';

class Popup extends Component {
  state = {
    showAlert1: true
  };
  render() {
    return (
      <IonAlert
        isOpen={true}
        header={'Alert'}
        subHeader={'Subtitle'}
        message={'This is an alert message.'}
        buttons={['OK']}
      />
    );
  }
}

export default Popup;
