import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import { IonApp, setupConfig } from '@ionic/react';
import { Plugins } from '@capacitor/core';
import history from 'utils/history';
// Ionic 4 styles
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import 'style/index.scss';

import { Loading } from 'components/common';

setupConfig({
  hardwareBackButton: true
});

class RootContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
    this.app = Plugins.App;
    this.app.addListener('backButton', () => {
      history.goBack();
    });
  }
  render() {
    const { children } = this.props;
    if (this.state.loading) {
      return <Loading />;
    }
    return (
      <IonApp>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </IonApp>
    );
  }
}

RootContainer.propTypes = {
  children: PropTypes.node
};
export default RootContainer;
