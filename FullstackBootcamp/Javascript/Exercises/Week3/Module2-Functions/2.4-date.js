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
  