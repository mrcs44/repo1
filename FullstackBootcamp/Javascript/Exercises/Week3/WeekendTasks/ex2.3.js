const findNextSquare = (number) => {

    let num;
    let nextNum;
    if(Math.sqrt(number) % 1 === 0){
        num=Math.sqrt(number);
        nextNum = ++num;
    } else { return -1;}

    return nextNum * nextNum;
}
console.log(findNextSquare(114));