import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, color, wide }) => (
  <button
    className="button"
    type="button"
    style={{
      backgroundColor: color ? '#dfdfdf' : null,
      width: wide ? '50%' : null,
    }}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.bool,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: false,
  wide: false,
};

export default Button;
