// console.log('Hello World');
// console.log('This is day 1 of Javascript');

// // Variables

// let x = 3;

// console.log(x);

// // Naming
// All JavaScript variables must be identified with unique names.
// These unique names are called identifiers.

// The general rules for constructing names for variables (unique identifiers) are:

// Names can contain letters, digits, underscores, and dollar signs.You cannot use any other characters, including spaces, symbols, and punctuation marks.
// Names must begin with a letter
// Names can also begin with $ and _
// Names are case sensitive (y and Y are different variables)
// You cannot use one of JavaScript’s reserved words as a variable name. All programming languages have a supply of words that are used internally by the language and that can’t be used for variable names because doing so would cause confusion
// JavaScript’s keywords
// JavaScript’s reserved words
// Make your names descriptive.
// When the name contains multiple words, camelCase is commonly used. That is: words go one after another, each word except first starting with a capital letter: myVeryLongName.

// Examples of valid names:

// let userName;
// let test123;
// Examples of incorrect variable names:

// let 1a; // cannot start with a digit
// let my-name; // hyphens '-' aren't allowed in the name

// Keywords
// The let keyword tells the browser to create variables:

// let x, y;
// x = 5 + 6;
// y = x * 10;

// Comments
// Code after double slashes // or between /* and */is treated as a comment.
// Comments are ignored, and will not be executed:

// let x = 5;   // I will be executed
// // let x = 6;   I will NOT be executed

// Undefined
// Undefined is when a variable is declared but not assigned to anything.
// let a;
// You have created the variable a, but it has no assignment and is undefined.

// Javascript Primitive Data Types

// String
// This is the text that we put inside quotes: "Hello world"

// Strings may have single quotes ('), double quotes ("), or backticks (`) which are read equally, but they must have the exact, consistent quotes at beginning and end.

// To use an apostrophe within a string, either uses double quotes around the string or escape the apostrophe with a backslash immediately before it. Like so: 'Jimmy\'s Car'

// When you add two strings (or even a string and a number), JS will perform string concatenation and return the two strings together:

//     let a = "Hello";
//     let b = "World";
//     let c = a+b;
//     console.log(c);
// The console would show: "HelloWorld".

// Anything inside the quotes is considered a string, even numbers: “43” (string) ≠ 43 (number).

// Long Literal Strings
// Rather than having lines that go on endlessly, you can specifically break the string into multiple lines in
// the source code without affecting the actual string contents.

// The + operator

// let longString = "This is a very long string which needs " +
//                  "to wrap across multiple lines because " +
//                  "otherwise, my code is unreadable.";
// The backslash character \

// At the end of each line to indicate that the string will continue on the next line.
// Make sure there is no space or any other character after the backslash.

// let longString = "This is a very long string which needs \
// to wrap across multiple lines because \
// otherwise my code is unreadable.";

// String Properties
// Built-in length property:
// let lengthTxt = longString.length

// String Methods
// The indexOf() method: returns the index of (the position of) the first occurrence of a specified text in a string:
// Return -1 if the text is not found
// let str = "Hello Everyone, please say hello to the class";
// let posUppercaseHello = str.indexOf("Hello"); // case sensitive
// let posLowercaseHello = str.indexOf("hello");
// console.log(posUppercaseHello) // 0
// console.log(posLowercaseHello) // 27

// let secondstr = "hello Everyone, please say hello to the class";
// let secondStrPosHello = secondstr.indexOf("hello");
// console.log(secondStrPosHello) // 0
// The substring(startIndex, endIndex) methods:
// Returns the characters in a string that begins at “startIndex” and ends at the “endIndex”.
// “endIndex” is optional, and if omitted, up to the end of the string is assumed.
// “endIndex” is not included.
// let str = "Hello Everyone, please say hello to the class ";
// str.substring(0,4) //returns "Hell" --> the index 4 isn't included
// str.substring(2,4) //returns "ll"
// str.substring(15) //returns "please say hello to the class"
// The toLowerCase() method: Returns the string with all of its characters converted to lowercase.
// let myStr = "Hello Everyone, Please say hello to the class ";
// myStr.toLowerCase() //returns "hello everyone, please say hello to the class "

// More String Methods
// replace()
// concat()
// toUpperCase()
// trim()
// charAt()

let x = 5 + 6;
console.log(x);
