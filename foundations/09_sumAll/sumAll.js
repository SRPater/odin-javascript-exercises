const sumAll = function(a, b) {
    // Check if both arguments are integers
    if (!(Number.isInteger(a) && Number.isInteger(b))) {
        return "ERROR";
    }
    
    // Check if both arguments are positive
    if (a < 0 || b < 0) {
        return "ERROR";
    }

    // Swap arguments if bigger number comes first
    if (a > b) {
        const temp = a;
        a = b;
        b = temp;
    }

    // Sum arguments
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
