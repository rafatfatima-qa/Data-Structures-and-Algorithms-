/*
Consider the above array again and find the smallest element in the array.
*/


let myArray = [2,0,1,6,45,89,-1];

/* thru Loops*/

let smallestNum = 0;

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] < smallestNum) {
        smallestNum = myArray[i];
    }
}
console.log("Smallest Number in array is: ", smallestNum);




/* Thru math.min() function */
let min = myArray.reduce(function(a, b) {
    return Math.min(a, b);
});

console.log("Smallest Number in array is: ", min);
