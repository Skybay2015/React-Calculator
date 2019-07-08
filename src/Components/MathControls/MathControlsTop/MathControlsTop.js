import React from 'react';
import MathControl from '../MathControl/MathControl';

const MathControlsTop = props => {
    const controls = [
        {
            value: '*',
        },
        {
            value: '/',
        },
        {
            value: 'AC',
        },
    ];
    return (
        <div>
            {controls.map(({ value }) => {
                if (value === 'AC') {
                    return (
                        <MathControl
                            key={
                                Date.now() + Math.random() ** Math.random() * 10
                            }
                            value={value}
                            handleClick={props.clearAll}
                        />
                    );
                }
                return (
                    <MathControl
                        key={Date.now() + Math.random() ** Math.random() * 10}
                        value={value}
                        handleClick={props.pressed}
                    />
                );
            })}
        </div>
    );
};

export default MathControlsTop;
