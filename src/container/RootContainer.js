import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { IonApp, setupConfig } from '@ionic/react';
// Ionic 4 styles
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import 'style/index.scss';

import { Loading } from 'components/common';

setupConfig({
  hardwareBackButton: true
});

const RootContainer = props => {
  return (
    <IonApp>
      <Suspense fallback={<Loading />}>{props.children}</Suspense>
    </IonApp>
  );
};
RootContainer.propTypes = {
  children: PropTypes.node
};
export default RootContainer;
