import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { IonApp } from '@ionic/react';
import SisPoppup from 'components/Popup';
// Ionic 4 styles
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import 'style/index.scss';

import { Loading } from 'components/common';

const RootContainer = props => {
  const { payload } = props.popup;
  return (
    <IonApp>
      <Suspense fallback={<Loading />}>{props.children}</Suspense>
      <SisPoppup options={payload} />
    </IonApp>
  );
};
RootContainer.propTypes = {
  children: PropTypes.node,
  popup: PropTypes.any
};
export default RootContainer;
