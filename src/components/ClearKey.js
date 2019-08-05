import React from 'react';

const ClearKey = props => (
    <div 
        className='calculator__keypad__key operator'
        onClick={() => props.handleClear()}
    >
        {props.children}
    </div>
)

export default ClearKey;