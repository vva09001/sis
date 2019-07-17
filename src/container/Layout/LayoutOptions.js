import React from 'react';
import { IonContent } from '@ionic/react';
import Header from '../Common/Header';
import PropTypes from 'prop-types';

const LayoutOptions = props => {
  return (
    <div className="layout-options">
      <IonContent>
        <Header title={props.title} content={props.content} content2={props.content2} />
        <div className="content">{props.children}</div>
      </IonContent>
    </div>
  );
};

LayoutOptions.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  content: PropTypes.node,
  content2: PropTypes.node
};
export default LayoutOptions;
