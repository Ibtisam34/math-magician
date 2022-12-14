import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ result, next, operation }) => {
  let display;

  if (result && operation && next) {
    display = next;
  } else {
    display = result;
  }

  return (
    <div className="display">
      {display}
    </div>
  );
};

Display.defaultProps = {
  result: '0',
  next: null,
  operation: null,
};

Display.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

export default Display;
