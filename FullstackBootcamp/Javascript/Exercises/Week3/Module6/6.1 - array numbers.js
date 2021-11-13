// Instructions
// Create array with numbers : const arr = [1,7,3,0,-5,7,3,9];
// 1. Print with for loop all the number.
// 2. Create function “arrayLength” that return the array length (don’t use arr.length)
// 3. Create function “arraySum” , the function return the sum of all elements in array.
// 4. Create function “arrayMulti” , the function return the multiplication of all the elements in array.

const arr = [1, 7, 3, 14, -5, 7, 3, 9];

//! 1:

for(let i = 0 ; i < arr.length ; i++) {
    console.log(arr[i]);
}


//! 2:
function arrayLength(arr){
    let len = (arr.push(true) - 1);
    return len;
}


console.log(arrayLength(arr));

//! 3:

function arraySum(arr) { 

    let sumOfArray = 0;
    for(let i=0 ; i < arr.length ; i++) {
        sumOfArray += arr[i];
    }
    return sumOfArray;
}
console.log(arraySum(arr));


//! 4:

function arrayMulti(arr) { 

    let arrayMulti = 1;
    for(let i=0 ; i < arr.length ; i++) {
        arrayMulti *= arr[i];
    }
    return arrayMulti;
}
console.log(arrayMulti(arr));



