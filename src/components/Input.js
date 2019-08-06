import React from 'react';

const Input = (props) => (
    <div>
        <div className='calculator__input'>
            {props.input}
        </div>
        <div className='calculator__output'>
            <p>{props.output}</p>
        </div>
    </div>
)


export default Input;