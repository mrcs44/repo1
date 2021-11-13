// Ex5.3 - To Camel Case
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"




const toCamelCase = (str) => {
    let strToArr = str.split('');
    console.log(strToArr);
    for(let i = 0 ; i < strToArr.length ; i++){
        if (strToArr[i] === '-'){
            strToArr[i]=strToArr[i].replace(/-/,'');
            strToArr[i+1].toUpperCase();
        }
        else if(strToArr[i] === '_') {
            strToArr[i]=strToArr[i].replace(/_/,'');
            strToArr[i+1].toUpperCase();
        }
    }
    return strToArr.join('');

}

console.log(toCamelCase('ran-Emanuel_Marcus'));




// const toCamelCase = (str) => {
    
//     let strToArray = str.split('-');
//     for(let i = 0; i<strToArray.length; i++){
//         strToArray[i];
//     }

    

//     return 

// };

// const firstToUpperCase = (word) => {
//     strToArr = word.split('');
//     console.log(strToArray);
//     strToArr[0].ToUpperCase;
//     newWord = strToArray.join('');

//     return newWord;
// }

// console.log(toCamelCase('Ran-Marcus'));
// console.log(firstToUpperCase('ran'));