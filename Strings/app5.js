/*
There’s a string that’s given to you: ‘Reactj’.
You need to add s to its last index to make it a complete name i.e. ‘Reactjs’
*/

let myString = "Reactj";

console.log(myString.padEnd(7, "s")); // direct method

/* generic method */
let StringToBeAdded = "s";

let length = myString.length;
// console.log(Length);

let stringToBeAddedLength = StringToBeAdded.length;
//console.log(stringToBeAddedLength);

let newLength = length + stringToBeAddedLength;
//console.log(newLength);

console.log(myString.padEnd(newLength, StringToBeAdded)); 


/* Tried another string for practice */

// let myString = "Rafat Fa"
// console.log(myString.padEnd(12, "tima")); // direct method

// let length = myString.length;
// let StringToBeAdded = "tima";

// let newLength = length + stringToBeAddedLength;

// console.log(myString.padEnd(newLength, StringToBeAdded)); // generic method
