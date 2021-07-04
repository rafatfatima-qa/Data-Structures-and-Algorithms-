/*
Consider the array: [2, 2, 1, 0, 9, 39, 20] .
Can you find out how many times 2 occurs in this array and return the count of it?

*/

let myArray = [2, 2, 1, 0, 9, 39, 20];
let count = 0;

/* By For Loop */
console.log("Using For loop");

for (let i=0; i < myArray.length; i++){

    if (myArray[i] == 2){
        count++;
    }
    
}

console.log("Repetition of 2 is: ", count);

/* By While Loop */

let j=0;
let repeat = 0;
console.log("\nUsing While loop");

while (j < myArray.length){
    
    if (myArray[j] == 2){
        repeat++;
    }
    j++;
    
}
console.log("Repetition of 2 is: ", repeat);
