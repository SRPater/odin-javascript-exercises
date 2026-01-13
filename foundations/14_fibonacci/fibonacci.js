const fibonacci = function(input) {
    let n;

    if (typeof input !== "number") {
        n = parseInt(input);
    } else {
        n = input;
    }

    if (n < 0) return "OOPS";
    
    const fibArray = [0, 1];

    for (let i = 2; i <= n; i++) {
        fibArray[i] = fibArray[i - 2] + fibArray[i - 1];
    }

    return fibArray[n];
};

// Do not edit below this line
module.exports = fibonacci;
