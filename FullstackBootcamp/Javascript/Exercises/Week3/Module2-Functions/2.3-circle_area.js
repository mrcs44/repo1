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
