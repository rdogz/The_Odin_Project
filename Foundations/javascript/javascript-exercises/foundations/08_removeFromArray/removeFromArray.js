const removeFromArray = function(arr, ...toRemove) {
    let newArray = arr;
    for (let i = 0; i < toRemove.length; i++) {
        newArray = newArray.filter((itemAtIndex) => itemAtIndex !== toRemove[i]);
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
