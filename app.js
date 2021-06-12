const add = (a, b) => {
    return a + b;
}

const subtract = (a, b) => {
    return a - b;
}

const multiply = (a, b) => {
    return a * b;
}

const divideValue = (a, b) => {
    return a / b;
}

const divideValueUptoDecimal = (a, b, c) => {
    return (a / b).toFixed(c);
}

const divideValueInt = (a, b) => {
    if ((a / b) > 0.5) {
        return (parseInt(a / b) + 1);
    }
    else {
        return parseInt(a / b);
    }
}

const absNumber = (a) => {
    return Math.abs(a);
}

module.exports = {
    add,
    subtract,
    multiply,
    divideValue,
    divideValueInt,
    divideValueUptoDecimal,
    absNumber
};