import React from 'react';
import Key from './components/Key';
import ClearKey from './components/ClearKey';
import Input from './components/Input'

import './Calculator.scss'


class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleClear() {
        console.log('it works');
    }

    render() {
        return(
            <div className='calculator'>
                <Input/>
                <div className='calculator__keypad'>
                    <ClearKey handleClear={this.handleClear()}>C</ClearKey>
                    <Key>+/-</Key>
                    <Key>%</Key>
                    <Key>&divide;</Key>
                    <Key>1</Key>
                    <Key>2</Key>
                    <Key>3</Key>
                    <Key>&times;</Key>
                    <Key>4</Key>
                    <Key>5</Key>
                    <Key>6</Key>
                    <Key>-</Key>
                    <Key>7</Key>
                    <Key>8</Key>
                    <Key>9</Key>
                    <Key>+</Key>
                    <Key>0</Key>
                    <Key>.</Key>
                    <Key>DEL</Key>
                    <Key>=</Key>
                </div>
            </div>
        )
    }
}

export default Calculator;