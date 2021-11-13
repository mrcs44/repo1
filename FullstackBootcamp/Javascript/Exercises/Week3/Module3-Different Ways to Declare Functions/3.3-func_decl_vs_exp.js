/*

Instructions
1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.
2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)

*/


//! 1:

function percentageOfWorld1(country, population){
    let popPrecentage = (population / 7900)*100;
    let popPrecentageRounded = parseFloat(popPrecentage.toFixed(1));
    return `${country} has ${population} million people, so it's about ${popPrecentageRounded}% of the world population.`;

}


//! 2:

//! 3: 

const israelPopulation = percentageOfWorld1("Israel", 9.217);
const japanPopulation = percentageOfWorld1("Japan", 125.8);
const brazilPopulation = percentageOfWorld1("Brazil", 212.6);

console.log(israelPopulation);
console.log(japanPopulation);
console.log(brazilPopulation);


//! 4:


const percentageOfWorld2 = function (country, population){
    let popPrecentage = (population / 7900)*100;
    let popPrecentageRounded = parseFloat(popPrecentage.toFixed(1));
    return `${country} has ${population} million people, so it's about ${popPrecentageRounded}% of the world population.`;
}


const israelPopulation2 = percentageOfWorld2("Israel", 9.217);
const japanPopulation2 = percentageOfWorld2("Japan", 125.8);
const brazilPopulation2 = percentageOfWorld2("Brazil", 212.6);

console.log(israelPopulation2);
console.log(japanPopulation2);
console.log(brazilPopulation2);