export function concatString({ value, isOneTimeAvailable = true }) {
    return {
        type: 'CONCAT_STRING',
        payload: {
            value: `${value}`,
            isOneTimeAvailable,
        },
    };
}

export function pressMathSymbol(value) {
    return {
        type: 'PRESSED_MATH_SYMBOL',
        payload: {
            value 
        }
    };
}

export function calculate(value) {
    return {
        type: 'CALCULATE',
        payload: {
            value
        }
    }
}

export function clearAll() {
    return {
        type: 'CLEAR_ALL',
    }
}
