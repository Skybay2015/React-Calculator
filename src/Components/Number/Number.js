import React from 'react';

const Number = ({ value, isOneTimeAvailable, concat }) => {
    return (
        <div onClick={() => concat({ value, isOneTimeAvailable })}>
            {value}
        </div>
    );
};

export default Number;
