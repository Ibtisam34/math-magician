/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, color, wide, clickHandler,
}) => {
  const handleClick = (buttonName) => clickHandler(buttonName);
  return (
    <button
      className="button"
      type="button"
      style={{
        backgroundColor: color ? '#dfdfdf' : null,
        width: wide ? '50%' : null,
      }}
      onClick={() => handleClick(name)}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  color: PropTypes.bool,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  color: false,
  wide: false,
};

export default Button;
