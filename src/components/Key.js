import React from 'react';

const isKeyOperator = val => {
    return !isNaN(val) || val === "." 
}

const Key = props => (
    <div 
        className={`calculator__keypad__key ${isKeyOperator(props.children) ? null : 'operator'}`}
    >
        {props.children}
    </div>
)

export default Key;