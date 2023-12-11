// 🌟 Exercise 1: Your Favorite Food
// Instructions
// Store your favorite food into a variable.

let favoriteFood = "pizza";

// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)

let favoriteMeal = "dinner";

// Console.log I eat <favorite food> at every <favorite meal>

console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`);


// 🌟 Exercise 2 : Series
// Instructions
// Part I
// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];

// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.

let myWatchedSeriesLenght= myWatchedSeries.length;

// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched

let myWatchedSeriesSentence = myWatchedSeries[0] + ", " + myWatchedSeries[1] + ", " +"and "+ myWatchedSeries[2] + ".";


// For example : black mirror, money heist, and the big bang theory

// Console.log a sentence using both of the variables created above

console.log(`I watched ${myWatchedSeriesLenght} series : ${myWatchedSeriesSentence}`)

// For example : I watched 3 series : black mirror, money heist, and the big bang theory


// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
myWatchedSeries.splice(2,1,"friends");

// Add, at the end of the array, the name of another series you watched.

myWatchedSeries.push("the office");

// Add, at the beginning of the array, the name of your favorite series.

myWatchedSeries.splice(0,0,"the good place");

// Delete the series “black mirror”.

myWatchedSeries.splice(1,1);

// Console.log the third letter of the series “money heist”.

console.log(myWatchedSeries[1][2])
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.

console.log(myWatchedSeries);


// 🌟 Exercise 3 : The Temperature Converter
// Instructions
// Store a celsius temperature into a variable.

let celsium = 30;

// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
let fahrenheit = celsium * 9 / 5 + 32;
console.log(`${celsium}°C is ${fahrenheit}°F.`);
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

// 🌟 Exercise 4 : Guess The Answers #1
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// Using the code below:

let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
    // Prediction: 55
    // Actual: 55

    a = 2;

console.log(a+b) //second expression
    // Prediction: 23
    // Actual: 23

// Analyse the code below, what will be the outcome?
console.log(3 + 4 + '5'); 
// Prediction: "75"
// Actual: "75"


// Exercise 5 : Guess The Answers #2
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.


// What is the output of each of the expressions below?


typeof(15)
// Prediction: number
// Actual: number

typeof(5.5)
// Prediction: number
// Actual: number

typeof(NaN)
// Prediction: no idea
// Actual: nothing

typeof("hello")
// Prediction: string
// Actual: string

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: true
// Actual: true

"hamburger" + "s"
// Prediction: hamburgers
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: not number
// Actual: NaN

"1" + "3"
// Prediction: 13 as a string
// Actual: 13 as a string

"1" - "3"
// Prediction:
// Actual:

"johnny" + 5
// Prediction:
// Actual:

"johnny" - 5
// Prediction:
// Actual:

99 * "hello"
// Prediction:
// Actual:

1 != 1
// Prediction:
// Actual:

1 == "1"
// Prediction:
// Actual:

1 === "1"
// Prediction:
// Actual:
