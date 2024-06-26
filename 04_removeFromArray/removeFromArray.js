const removeFromArray = function(arr, ...valuesToBeRemoved) {

    const newArray = [];

    arr.forEach((item) => {
        if (!valuesToBeRemoved.includes(item)) {
            newArray.push(item)
        }
    });

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
