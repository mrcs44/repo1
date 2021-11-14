

const arr = [8,3,2,1,5,7];
const sumOfTwo = (arr) => {
    arr.sort(function(a, b){return a-b});

    return (arr[0]+arr[1]);
}

console.log(sumOfTwo(arr));