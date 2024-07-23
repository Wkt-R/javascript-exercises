const sumAll = function(firstArg, secondArg) {
    if(!Number.isInteger(firstArg) || !Number.isInteger(secondArg)){
        return "ERROR";
    } else if(firstArg < 0 || secondArg < 0){
        return "ERROR";
    } else{
    return (Math.abs(firstArg-secondArg) + 1)*(firstArg + secondArg)/2;
    }
};

// Do not edit below this line
module.exports = sumAll;
