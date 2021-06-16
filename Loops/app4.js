/*
Consider you are given an array [2,0,1,6,45,89].
You need to find the largest element in the array. How’d you do that?
*/

let myArray = [2,0,1,6,45,89];

/* thru Loops*/
let largestNum = 0;

for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] > largestNum) {
      largestNum = myArray[i];
    }
}
console.log("Largest Number in array is: ", largestNum);


/* Thru math.max() function */
let max = myArray.reduce(function(a, b) {
    return Math.max(a, b);
});

console.log("Largest Number in array is: ", max);
