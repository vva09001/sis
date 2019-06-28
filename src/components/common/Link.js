import React from 'react';
import PropTypes from 'prop-types';
import { IonText } from '@ionic/react';
import '../../style/buttons.scss';

const Links = props => {
  const { items } = props;
  const links = [];
  items.map((item, index) => {
    const className = `sis-button-link-${item.type}`;
    links.push(
      <div className={className} key={'link-' + index}>
        <div className="head">
          <IonText>
            <p>{index + 1}</p>
          </IonText>
        </div>
        <div className="body" onClick={props.click}>
          {item.label}
        </div>
      </div>
    );
  });
  return links;
};

Links.propTypes = {
  type: PropTypes.string,
  number: PropTypes.number,
  children: PropTypes.node,
  click: PropTypes.func,
  items: PropTypes.any
};
export default Links;
