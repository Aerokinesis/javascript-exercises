const repeatString = function(str, repeatAmount = randInt()) {
    function randInt() {
        return Math.floor(Math.random() * 1000);
    }
    
    let word = "";
    if (str == "") {
        return "";
    }
    if (repeatAmount < 0) {
        return "ERROR";
    }
    if (repeatAmount == 0) {
        return word;
    }

    for (let i = 0; i < repeatAmount; i++) {
        word += str;
    }

    return word;
};

// Do not edit below this line
module.exports = repeatString;
