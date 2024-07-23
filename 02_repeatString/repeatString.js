const repeatString = function(msg, number) {
    if(number < 0){
        return "ERROR";
    } else{
    let finalMsg = msg.repeat(number);
    return finalMsg;
    }
};

// Do not edit below this line
module.exports = repeatString;
