import React from 'react';
import Key from './components/Key';
import ClearKey from './components/ClearKey';
import Input from './components/Input'
import * as math from 'math.js';

import './Calculator.scss'


class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(val) {
        this.setState(
            {
                input: this.state.input + val
            }
        );
    }

    handleEqual() {
        this.setState(
            {
                input: eval(this.state.input)
            }
        )
    }

    render() {
        return(
            <div className='calculator'>
                <Input input={this.state.input} />
                <div className='calculator__keypad'>
                    <ClearKey handleClear={() => this.setState({input: ''})}>C</ClearKey>
                    <Key handleClick={this.handleInput}>+/-</Key>
                    <Key handleClick={this.handleInput}>%</Key>
                    <Key handleClick={this.handleInput}>/</Key>
                    <Key handleClick={this.handleInput}>1</Key>
                    <Key handleClick={this.handleInput}>2</Key>
                    <Key handleClick={this.handleInput}>3</Key>
                    <Key handleClick={this.handleInput}>x</Key>
                    <Key handleClick={this.handleInput}>4</Key>
                    <Key handleClick={this.handleInput}>5</Key>
                    <Key handleClick={this.handleInput}>6</Key>
                    <Key handleClick={this.handleInput}>-</Key>
                    <Key handleClick={this.handleInput}>7</Key>
                    <Key handleClick={this.handleInput}>8</Key>
                    <Key handleClick={this.handleInput}>9</Key>
                    <Key handleClick={this.handleInput}>+</Key>
                    <Key handleClick={this.handleInput}>0</Key>
                    <Key handleClick={this.handleInput}>.</Key>
                    <Key handleClick={this.handleInput}>DEL</Key>
                    <Key handleClick={() => this.handleEqual()}>=</Key>
                </div>
            </div>
        )
    }
}

export default Calculator;