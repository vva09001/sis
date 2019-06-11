import React from 'react';
import PropTypes from 'prop-types';
import Header from 'container/Common/Header';
import { IonContent } from '@ionic/react';

const Layout = props => {
  return (
    <div className="layout">
      <IonContent>
        <div className="header">
          <Header title={props.title} />
        </div>
        <div className="content">{props.children}</div>
      </IonContent>
    </div>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
};

export default Layout;
