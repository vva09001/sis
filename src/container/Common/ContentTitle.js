import React from 'react';
import PropTypes from 'prop-types';

const ContentTitle = props => {
  return (
    <div className="text-title">
      <p>{props.children}</p>
    </div>
  );
};

ContentTitle.propTypes = {
  children: PropTypes.node
};

export default ContentTitle;
