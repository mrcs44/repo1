// Instructions
// Create a simple password validation function that takes a password string as an argument.
// If the passwords length is more than 7 characters return “Strong”. If it is less than 7 characters long return “Weak.
// 1) Create a function that uses a if/else conditional expression.
// 2. Create a function that uses a ternary conditional expression.
// 3. Create a function that uses a && logical operator.
// 4. Create an “advanced” password validation function that takes a password string as an argument.
// If the password length is more than 7 characters long and has at least one capital letter return “Very Strong”.
// If the password length in only 7 characters long return “Strong”.
// If the password length is less than 7 characters long return “Weak”
// Use only a ternary conditional expression.

//! 1:

let password = prompt('Type in your password');

function passValid1(password){
    if (password.length > 7){
        return 'Strong';
    } else {
        return 'Weak';   
    }
}
//! 2: 

function passValid2(password){

    password.length > 7 ? console.log('Strong') : console.log('Weak')

}

//! 3: 

console.log((password.length > 7 && "Strong") || "weak");


//! 4:

function passValid4(password) {
    if (password.toString.length > 7 && hasAnUpperCase(password)){
        return 'Very Strong';
    } else if (password.length === 7){
        return 'Strong';
    } else {
        return 'Weak';   
    }
}

function hasAnUpperCase(str){
    return str.toUpperCase() != str;
}


console.log(passValid1(password));
console.log(passValid2(password));
console.log(passValid4(password));

console.log(hasAnUpperCase('asd'));