/* 
Instructions
1. Write a function called 'describeCountry' which takes three parameters:
'country', 'population' and 'capitalCity'. Based on this input, the
function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'
2. Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.

*/

function describeCountry(country, population, capitalCity){

    let dataString = `${country} has ${population} million people and its capital city is ${capitalCity}`;

return dataString;



}

let ohio = describeCountry("Ohio", 11.69, "Columbus");
let georgia = describeCountry("Georgia", 3.72, "Tbilisi");
let russia = describeCountry("Russia", 144.1, "Moscow");


console.log(ohio);
console.log(georgia);
console.log(russia);
