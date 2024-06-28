const palindromes = function (str) {
    let cleanStr = str.replace(/\W/g, '').toLowerCase();
    
    let reverseStr = cleanStr.split("").reverse().join("").toLowerCase();

    if (reverseStr == str || cleanStr == reverseStr) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
