// Instructions
// 1. Create a function that receives 1 argument, an object and returns a new object with the properties and values swapped.

const numbers = {
    one        : 1 ,
    two        : 2 ,
    three      : 3 , 
    four       : 4 ,
    five       : 5
}


function swapped (obj){ 

Object.fromEntries(Object.entries(numbers).map(([k, v]) => [v, k]))

}

console.log(swapped(numbers));