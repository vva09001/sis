import React from 'react';
import { IonLoading } from '@ionic/react';

const Loading = () => (
  <IonLoading
    spinner={null}
    duration={5000}
    message={'Please wait...'}
    translucent={true}
    cssClass="custom-class custom-loading"
  />
);

export default Loading;
