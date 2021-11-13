// Ex5.5 - Abbreviate two words
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H
// Patrick Feeney => P.F

const nameToInit = (str) => {
    let nameArr = str.split(' ');
    console.log(nameArr);
    let initials = [nameArr[0].slice(0,1) , nameArr[1].slice(0,1)];
    console.log(initials);
    finalInit = initials.join('.').toUpperCase();

    return finalInit;
}
console.log(nameToInit('ran marcus'));

