import React from 'react';
import PropTypes from 'prop-types';

// Checking if the given key is a digit or an opeartor:
const isKeyOperator = val => !Number.isNaN(parseFloat(val)) || val === '.';

const Key = ({ handleClick, children }) => (
  <div
    className={`calculator__keypad__key ${
      isKeyOperator(children) ? null : 'key--operator'
    }`}
    onClick={() => handleClick(children)}
    onKeyDown={() => handleClick()}
    role="presentation"
  >
    {children}
  </div>
);

Key.propTypes = {
  handleClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Key;
