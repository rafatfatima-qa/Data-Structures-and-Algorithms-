/*
Traverse an array [4, -20, 50, 1, 0, -5, 6, 7, 10] and print all of its elements and indices.
*/

let myArray = [4, -20, 50, 1, 0, -5, 6, 7, 10];

/* By For Loop */
console.log("Using For loop");

for (let i=0; i < myArray.length; i++){

    
    console.log("index: "+i, "Element: " + myArray[i]);
}


/* By While Loop */
let j=0;
console.log("\nUsing While loop");

while (j < myArray.length){

    
    console.log("index: "+j, "Element: " + myArray[j]);
    j++;
}

