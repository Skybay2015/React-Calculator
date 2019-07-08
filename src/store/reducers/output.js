const initialState = {
    historyValue: '',
    currentValue: '0',
    lastPressedMathSymbol: false,
    calculated: false,
};

export default (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case 'CONCAT_STRING':
            // allow to write dot only 1 time
            if (payload.isOneTimeAvailable) {
                if (
                    state.currentValue.indexOf(payload.value) === -1
                ) {
                    if (state.calculated) {
                        return {
                            ...state,
                            currentValue: state.currentValue + payload.value,
                        };
                    }
                    return {
                        ...state,
                        currentValue: state.currentValue + payload.value,
                        historyValue: state.historyValue + payload.value,
                    };
                }
            } else {
                if (
                    state.currentValue.length === 1 &&
                    state.currentValue.indexOf('0') === 0
                ) {
                    return {
                        ...state,
                        currentValue: payload.value,
                        historyValue: state.historyValue + ' ' + payload.value,
                    };
                }

                if (state.lastPressedMathSymbol) {
                    return {
                        ...state,
                        currentValue: payload.value,
                        lastPressedMathSymbol: false,
                        historyValue: state.historyValue + ' ' + payload.value,
                    };
                }

                if (state.calculated) {
                    return {
                        ...state,
                        currentValue: state.currentValue + payload.value,
                    };
                }

                return {
                    ...state,
                    currentValue: state.currentValue + payload.value,
                    historyValue: state.historyValue + payload.value,
                };
            }

        case 'PRESSED_MATH_SYMBOL':
            if (
                state.currentValue.length === 1 &&
                state.currentValue.indexOf('0') === 0
            ) {
                return state;
            }
            if (state.currentValue.indexOf(payload.value) !== -1) return state;

            if (state.calculated) {
                return {
                    ...state,
                    historyValue: state.currentValue + ' ' + payload.value,
                    currentValue: payload.value,
                    calculated: false,
                    lastPressedMathSymbol: true,
                };
            }

            return {
                ...state,
                currentValue: payload.value,
                historyValue: state.historyValue + ' ' + payload.value,
                lastPressedMathSymbol: true,
            };

        case 'CALCULATE':
            return {
                ...state,
                currentValue: `${eval(state.historyValue)}`,
                historyValue:
                    state.historyValue +
                    ' ' +
                    payload.value +
                    eval(state.historyValue),
                calculated: true,
            };

        case 'CLEAR_ALL':
            return {
                historyValue: '',
                currentValue: '0',
                lastPressedMathSymbol: false,
                calculated: false,
            };
        default:
            return state;
    }
};
