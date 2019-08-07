import React from 'react';
import PropTypes from 'prop-types';

const CalculatorHeader = ({ input, output }) => (
  <div className="calculator__header">
    <div className="calculator__header__input">{input}</div>
    <div className="calculator__header__output">{output}</div>
  </div>
);

CalculatorHeader.propTypes = {
  input: PropTypes.string.isRequired,
  output: PropTypes.string.isRequired,
};

export default CalculatorHeader;
