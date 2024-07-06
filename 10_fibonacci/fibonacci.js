const fibonacci = function(num) {
    let stringToNum = 0;

    if (typeof num !== Number) {
        stringToNum = parseInt(num);
    } else {
        stringToNum = num;
    }

    if (stringToNum < 0) return "OOPS";
    if (stringToNum == 0) return 0;
    if (stringToNum == 1) return 1;
        
    return fibonacci(stringToNum - 2) + fibonacci(stringToNum - 1);
    };

// Do not edit below this line
module.exports = fibonacci;
