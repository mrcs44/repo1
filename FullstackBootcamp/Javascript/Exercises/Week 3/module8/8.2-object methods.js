// Instructions
// 1. Create an object called ‘mycountry’ for a country of your choice, containing properties ‘country’, ‘capital’, ‘language’, ‘population’ and ‘neighbours’ (an array)
// 2. Add a method to the object called 'describe' to the 'myCountry' object. With the help of the ‘this’ keyword, this method will log a string like this to the console:
// ‘Finland has 6 million people, their mother tongue is Finnish, they have 3 neighbouring countries and a capital called Helsinki’.
// 3. Call the ‘descrbie method’.
// 4. Add a method called 'checkIsland' to the 'myCountry' object. This method will set a new property on the object, called 'isIsland'.
// 'isIsland' will be true if there are no neighbouring countries, 



const myCountry = { 
    country     : 'Japan',
    capital     : 'Tokyop',
    language    : 'Japanese',
    population  : '125 million',
    neighbours  : new Array() ,
    describe(){
        return console.log(`${this.country} has ${this.population} people, their mother tongue is ${this.language}, they have ${this.areNeighbours(myCountry.neighbours)} neighbouring countries and a capital called ${this.capital}.`);
    },
    areNeighbours(arr) { 
        if (arr === 0 ){
            return 0;
        } else {
            return arr.length;
        }
    },
    checkIsIsland(){
        this.isIsland == this.neighbours.length;
    },
}
    
    
    
    console.log("aasd");
    console.log(myCountry.describe());
    console.log(myCountry);
    