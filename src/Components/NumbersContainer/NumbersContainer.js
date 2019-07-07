import React from 'react';
import Number from '../Number/Number';

const NumbersContainer = props => {
    const numbers = [
        {
            value: 0,
            isOneTimeAvailable: false,
        },
        {
            value: 1,
            isOneTimeAvailable: false,
        },
        {
            value: 2,
            isOneTimeAvailable: false,
        },
        {
            value: 3,
            isOneTimeAvailable: false,
        },
        {
            value: 4,
            isOneTimeAvailable: false,
        },
        {
            value: 5,
            isOneTimeAvailable: false,
        },
        {
            value: 6,
            isOneTimeAvailable: false,
        },
        {
            value: 7,
            isOneTimeAvailable: false,
        },
        {
            value: 8,
            isOneTimeAvailable: false,
        },
        {
            value: 9,
            isOneTimeAvailable: false,
        },
        {
            value: '.',
            isOneTimeAvailable: true,
        },
    ];
    return (
        <div>
            {numbers.map(({ value, isOneTimeAvailable }) => (
                <Number
                    key={Date.now() + Math.random()}
                    value={value}
                    isOneTimeAvailable={isOneTimeAvailable}
                    concat={props.concat}
                />
            ))}
        </div>
    );
};

export default NumbersContainer;
