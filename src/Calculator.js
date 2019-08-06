import React from 'react';
import Key from './components/Key';
import ClearKey from './components/ClearKey';
import Input from './components/Input'
// import * as math from 'math.js';

import './Calculator.scss'


class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            input: '',
            output: ''
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
                output: eval(this.state.input),
            }
        )
    }

    handlePlusMinus() {
        console.log('plusminus')
    }

    handleDEL() {
        this.setState(
            {
                input: this.state.input.slice(0, -1)
            }
        )
    }

    render() {
        return(
            <div className='calculator'>
                <Input input={this.state.input} output={this.state.output} />
                <div className='calculator__keypad'>
                    <ClearKey handleClear={() => this.setState({input: '', output: ''})}>C</ClearKey>
                    <Key handleClick={this.handlePlusMinus}>+/-</Key>
                    <Key handleClick={this.handleInput}>%</Key>
                    <Key handleClick={this.handleInput}>/</Key>
                    <Key handleClick={this.handleInput}>1</Key>
                    <Key handleClick={this.handleInput}>2</Key>
                    <Key handleClick={this.handleInput}>3</Key>
                    <Key handleClick={this.handleInput}>*</Key>
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
                    <Key handleClick={this.handleDEL}>DEL</Key>
                    <Key handleClick={() => this.handleEqual()}>=</Key>
                </div>
            </div>
        )
    }
}

export default Calculator;