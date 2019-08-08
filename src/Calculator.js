import React, { useState } from 'react';
import Key from './components/Key';
import CalculatorHeader from './components/CalculatorHeader';

import './Calculator.scss';

const Calculator = () => {
  // Initial states:
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  // Key functions:
  const handleInput = val => setInput(input + val);

  const handleEqual = () => {
    try {
      // eslint-disable-next-line
      setOutput(eval(input) || '') + '';
    } catch (err) {
      setOutput('error');
    }
  };
  const handleDEL = () => setInput(input.slice(0, -1));
  const handleClear = () => {
    setInput('');
    setOutput('');
  };

  return (
    <div className="calculator">
      <CalculatorHeader input={input} output={output} />
      <div className="calculator__keypad">
        <Key handleClick={handleClear}>C</Key>
        <Key handleClick={handleInput}>(</Key>
        <Key handleClick={handleInput}>)</Key>
        <Key handleClick={handleInput}>/</Key>
        <Key handleClick={handleInput}>1</Key>
        <Key handleClick={handleInput}>2</Key>
        <Key handleClick={handleInput}>3</Key>
        <Key handleClick={handleInput}>*</Key>
        <Key handleClick={handleInput}>4</Key>
        <Key handleClick={handleInput}>5</Key>
        <Key handleClick={handleInput}>6</Key>
        <Key handleClick={handleInput}>-</Key>
        <Key handleClick={handleInput}>7</Key>
        <Key handleClick={handleInput}>8</Key>
        <Key handleClick={handleInput}>9</Key>
        <Key handleClick={handleInput}>+</Key>
        <Key handleClick={handleInput}>0</Key>
        <Key handleClick={handleInput}>.</Key>
        <Key handleClick={handleDEL}>DEL</Key>
        <Key handleClick={handleEqual}>=</Key>
      </div>
    </div>
  );
};

export default Calculator;
