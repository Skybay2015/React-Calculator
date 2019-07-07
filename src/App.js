import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import Calculator from './Containers/Calculator/Calculator';
import Output from './Components/Output/Output';
import {
    concatString,
    pressMathSymbol,
    calculate,
    clearAll,
} from './store/actions/output';
import NumbersContainer from './Components/NumbersContainer/NumbersContainer';
import MathControlsRight from './Components/MathControls/MathControlsRight/MathControlsRight';
import MathControlsTop from './Components/MathControls/MathControlsTop/MathControlsTop';

function App(props) {
    return (
        <div className="App">
            <Calculator>
                <Output
                    currentValue={props.currentValue}
                    historyValue={props.historyValue}
                />
                <NumbersContainer concat={props.concat} />
                <MathControlsTop pressed={props.pressMathSymbol} 
                clearAll={props.clearAll}
                />
                <MathControlsRight
                    pressed={props.pressMathSymbol}
                    calculate={props.calculate}
                />
            </Calculator>
        </div>
    );
}

const mapStateToProps = state => {
    const { output } = state;
    return {
        currentValue: output.currentValue,
        historyValue: output.historyValue,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        concat: number => dispatch(concatString(number)),
        pressMathSymbol: value => dispatch(pressMathSymbol(value)),
        calculate: value => dispatch(calculate(value)),
        clearAll: () => dispatch(clearAll())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
