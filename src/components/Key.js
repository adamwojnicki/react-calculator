import React from 'react';

// Checking if the given key is a digit or an opeartor:
const isKeyOperator = val => {
    return !isNaN(val) || val === "." 
}

const Key = props => (
    <div 
        className={`calculator__keypad__key ${isKeyOperator(props.children) ? null : 'key--operator'}`}
        onClick={() => props.handleClick(props.children)}
    >
        {props.children}
    </div>
)

export default Key;