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
