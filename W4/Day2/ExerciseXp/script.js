// 🌟 Exercise 1 : Information
// Instructions
// Part I : function with no parameter

// Create a function called infoAboutMe() that takes no parameter.

function infoAboutMe(){
    console.log("My name is Tural and I am 29 years old");
}
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.

infoAboutMe();


// Part II : function with three parameters

// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.

function infoAboutPerson(personName, personAge, personFavoriteColor){
    console.log(`Your name is ${personName}, your age is ${personAge}, your favorite color is ${personFavoriteColor} `)
}

infoAboutPerson("Tural", 28, "green")
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")