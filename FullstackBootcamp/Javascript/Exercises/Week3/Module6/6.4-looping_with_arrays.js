// Instructions
// 1. Create an array containing 4 population values of 4 countries of your choice.
// Store this array into a variable called 'populations'
// 2. Create a function called ‘populationPercentages’ that takes the population array as an argument.
// 3. Inside the function, create an empty array called ‘percentages’.
// 4. Use a for loop to iterate over the population array you received as an argument..
// 5. On each iteration use the function we created earlier (module 3, ex.3.3-declarations vs expressions) for each element of the array.
// 6. Push the result to the ‘percentages’ array.
// 7. Return from the function the ‘percentages’ array.


const populations = [9.217, 125.8, 212.6, 140.3];

function populationPercentages(population){
    percentages = [];
    for(let i = 0 ; i < population.length ; i++){
        percentages.push(percentageOfWorld1(population[i]));
    }
    return percentages;
}

console.log(populationPercentages(populations));


/*

Instructions
1. The world population is 7900 million people. Create a function declaration called 'percentageOfWorld1' which receives a 'population' value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.
2. To calculate the percentage, divide the given 'population' value by 7900 and then multiply by 100
3. Call 'percentageOfWorld1' for 3 populations of countries of your choice, store the results into variables, and log them to the console
4. Create a function expression which does the exact same thing, called 'percentageOfWorld2', and also call it with 3 country populations (can be the same populations)

*/


function percentageOfWorld1(population){
    let popPrecentage = (population / 7900)*100;
    let popPrecentageRounded = parseFloat(popPrecentage.toFixed(1));
    return `Country has ${population} million people, so it's about ${popPrecentageRounded}% of the world population.`;

}

