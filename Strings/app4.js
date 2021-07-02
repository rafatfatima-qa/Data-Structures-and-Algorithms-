/*
Consider a string ‘Node.js’given to you. I want the last three characters removed. How’d you do that?
*/

let newString = "Node.js";

console.log(newString.slice(0, 4));  //direct method

lastThreeChars = newString.length - 3 ; 

console.log(newString.slice(0, lastThreeChars)); //a more generic method


/* Tried another word for practice */

// let newString = "Encyclopedia"; 
// console.log(newString.slice(0, 9));  //direct method
// lastThreeChars = newString.length - 3 ; 
// console.log(newString.slice(0, lastThreeChars)); //a more generic method