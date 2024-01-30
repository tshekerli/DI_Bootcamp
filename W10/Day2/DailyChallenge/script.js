// // 1st daily challenge

// const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
// function makeAllCaps(array) {
//     return new Promise((resolve, reject) => {
//       if (array.every(word => typeof word === 'string')) {
//         resolve(array.map(word => word.toUpperCase()));
//       } else {
//         reject('Not all items in the array are strings!');
//       }
//     });
//   }
  
//   function sortWords(array) {
//     return new Promise((resolve, reject) => {
//       if (array.length > 4) {
//         resolve(array.sort());
//       } else {
//         reject('Array length is not greater than 4!');
//       }
//     });
//   }

//     makeAllCaps(arrayOfWords)
//     .then(sortWords(arrayOfWords))
//     .then(result => console.log(result))
//     .catch(error => console.log(error));

  
  // 2nd daily challenge

  const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;
  
  function toJs() {
    return new Promise((resolve, reject) => {
      const morseJS = JSON.parse(morse);
      if (Object.keys(morseJS).length === 0) {
        reject('Morse JS object is empty!');
      } else {
        resolve(morseJS);
      }
    });
  }
  
  function toMorse(morseJS, userInput) {
    return new Promise((resolve, reject) => {
      const userInputLower = userInput.toLowerCase();
      if ([...userInputLower].every(char => char in morseJS)) {
        resolve([...userInputLower].map(char => morseJS[char]));
      } else {
        reject('User entered a character that doesn’t exist in the morse JS object!');
      }
    });
  }
  
  function joinWords(morseTranslation) {
    console.log(morseTranslation.join('\n'));
  }
  
  toJs()
    .then(morseJS => toMorse(morseJS, "Hello"))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => console.log(error));


 