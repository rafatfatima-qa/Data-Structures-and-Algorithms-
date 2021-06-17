/*

Suppose you’re given an array of animals [[‘cat’, ‘rabbit’], [‘pigeon’, ‘parrot’], [‘goldfish’, ‘whale’]].  
Now, when you encounter ‘cat or ‘rabbit’ inside a nested loop, print ‘pet animals’ in the console. 
Also, if you encounter ‘pigeon’ or ‘parrot’, print ‘pet birds’.
Also, when you encounter ‘goldfish’ or ‘whale’, print ‘fish’

*/

let myArray = [["cat", "rabbit"], ["pigeon", "parrot"], ["goldfish", "whale"]];

/* using while loop */
let i = 0;

while (i < myArray.length) {

  let j = 0;  
  while (j < myArray[i].length) {
  
    if ( (myArray[i][j] == "cat") || (myArray[i][j] == "rabbit") ){
      console.log("Pet animals");
    }

    else if ( (myArray[i][j] == "pigeon") || (myArray[i][j] == "parrot") ){
      console.log("Pet birds");
    }

    else if ( (myArray[i][j] == "goldfish") || (myArray[i][j] == "whale") ){
      console.log("Fish");
    }

    j++;
  }
  i++;

}

/* using for loop */

for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < myArray[i].length; j++) {

    if ( (myArray[i][j] == "cat") || (myArray[i][j] == "rabbit") ){
      console.log("Pet animals");
    }

    else if ( (myArray[i][j] == "pigeon") || (myArray[i][j] == "parrot") ){
      console.log("Pet birds");
    }

    else if ( (myArray[i][j] == "goldfish") || (myArray[i][j] == "whale") ){
      console.log("Fish");
    }
    
  }
}


