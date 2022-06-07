function getZeroFormat(num, limit){
    const sNum = num.toString();
    const sLimit = limit.toString();
    const numZero = sLimit.length - sNum.length;
    let start = 0;
    let zero = "";
    while (start < numZero) {
        zero += "0";
        start++;
    }
    const format = zero + sNum;
    return format
    
}

const format  = getZeroFormat(2, 1324);
console.log(format);
