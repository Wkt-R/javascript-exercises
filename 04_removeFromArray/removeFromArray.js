const removeFromArray = function(array, ...deleted) {
    return array.filter(elements => !deleted.includes(elements));
};

// Do not edit below this line
module.exports = removeFromArray;
