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


/*
Instructions
Why pay a fortune teller when you can just program your fortune yourself?
1. Write a function named `tellFortune` that takes 4 parameters:
jobTitle, location, partnerName, numberOfChildren
Based on this output the function returns a string with this format:
`You will be a programmer in Tel Aviv and married to Sharon with 2 children.
*/


function tellFortune(jobTitle, location, partnerName, numberOfChildren){

    let fortuneNews = ` You will be a ${jobTitle} in ${location} and married to ${partnerName} with ${numberOfChildren} children.` ;


    return fortuneNews;
}

console.log(tellFortune("Editor", "New York", "Yardena", 56));


/*

Instructions
Write a function that calculates the circle area by a given radius as an argument. Print the area as it is calculated and then print it rounded to two decimal places.

*/


function circleArea(Radius){

    let rSquarred = Math.pow(Radius,2);
    let circleArea = Math.PI * rSquarred;
    let circleAreaRounded = circleArea.toFixed(2);
    let printArea = `${circleArea} ${circleAreaRounded}`;

    return printArea;

}

/*

Instructions
Let us self-learn something. You come to your new work place and you are an expert in the technologies your company is working with. But all of the sudden your boss says. We want to implement a feature with dates. This will happen all the time in your career. So lets roll up our sleeves and start googling.
How to .... “date js”.
And as always the MDN docs are a great source
Find how to get the following:
1. Name of the current day e.g. Sunday 2. Current day of the month e.g. 31
3. Current month e.g January
5. Current Year e.g 2021
Create a function that will return a string in the following format:
`Today is Sunday the 31 of January, 2021’

*/

var DAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'];
   
   var MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'];
  
  function today(){
  
      var today = new Date();
      const dayOfWeek = DAYS[today.getDay()];
      const dayOfMonth = today.getDate();
      const month = MONTHS[today.getMonth()];
      const year = today.getFullYear();
  
      printDate = `Today is ${dayOfWeek} the ${dayOfMonth} of ${month}, ${year}`;
  
      return printDate;
  
  }
  
  console.log(today());
  