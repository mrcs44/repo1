

const toBinary = (arr) => {
    const binaryNum = arr.join('');
    console.log(binaryNum);
    return parseInt(binaryNum,2);
}

console.log(toBinary([0,1,1,0]));