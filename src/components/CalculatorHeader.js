import React from 'react';

const CalculatorHeader = (props) => (
    <div className='calculator__header'>
        <div className='calculator__header__input'>
            {props.input}
        </div>
        <div className='calculator__header__output'>
            {props.output}
        </div>
    </div>
)


export default CalculatorHeader;