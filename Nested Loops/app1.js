/*
Pose you’re given an array [ [1, 2], [3, 4], [5, 6] ].
Print all the members of this two-dimensional array using for loop and while nested loops.
*/

let myArray = [ [1, 2], [3, 4], [5, 6] ];

/* using while loop */

let i = 0; 
  while (i < myArray.length) {
    
   let j = 0;
    while (j < myArray[i].length) {
      console.log(myArray[i][j]);
      j++;
    }
    i++;
  }


/* using for loop */

for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < myArray[i].length; j++) {
    console.log(myArray[i][j]);
  }
}
