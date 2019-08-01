import React from 'react';
import Key from './Key';


class Calculator extends React.Component {
    constructor() {
        super();
        this.state = {
            outputVal: ''
        }
        this.handleInput = this.handleInput.bind(this);
    }

    handleInput() {
        this.setState({
            outputVal: event.target.value
        })
    }

    render() {
        return(
            <div className='calculator-face'>
            <div className='calc-output'>
                <p>{this.state.outputVal}</p>
            </div>
            <div className='calc-input'>
                <input type='text' onChange={this.handleInput}></input>
            </div>
            <div className='key-container'>
                <Key type='operator' value='C'/>
                <Key type='operator' value='+/-'/>
                <Key type='operator' value='%'/>
                <Key type='operator' value='&divide;'/>
                <Key type='digit' value='1'/>
                <Key type='digit' value='2'/>
                <Key type='digit' value='3'/>
                <Key type='operator' value='&times;'/>
                <Key type='digit' value='4'/>
                <Key type='digit' value='5'/>
                <Key type='digit' value='6'/>
                <Key type='operator' value='&minus;'/>
                <Key type='digit' value='7'/>
                <Key type='digit' value='8'/>
                <Key type='digit' value='9'/>
                <Key type='operator' value='+'/>
                <Key type='digit' value='0'/>
                <Key type='operator' value=','/>
                <Key type='operator' value='DEL'/>
                <Key type='operator' value='='/>
            </div>
        </div>
        )
    }
}

export default Calculator;