import React from 'react';

const MathControl = props => {
    
    return (
        <div onClick={() => props.handleClick(props.value)}>
            {props.value}
        </div>
    );
}

export default MathControl;
