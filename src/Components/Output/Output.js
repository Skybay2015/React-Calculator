import React from 'react';

const Output = props => {
    return (
        <div>
            <div>{props.historyValue}</div>
            <div>{props.currentValue}</div>
        </div>
    );
};

export default Output;
