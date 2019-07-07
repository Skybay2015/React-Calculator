import React from 'react';
import MathControl from '../MathControl/MathControl';

const MathControlsRight = props => {
    const controls = [
        {
            value: '-',
        },
        {
            value: '+',
        },
        {
            value: '=',
        },
    ];
    return (
        <div>
            {controls.map(({ value }) => {
                if (value === '=') {
                    return <MathControl key={Date.now() + Math.random() ** Math.random() * 10 } value={value} handleClick={props.calculate} />;
                }
                return (
                    <MathControl
                        key={Date.now() + Math.random()}
                        value={value}
                        handleClick={props.pressed}
                    />
                );
            })}
        </div>
    );
};

export default MathControlsRight;
