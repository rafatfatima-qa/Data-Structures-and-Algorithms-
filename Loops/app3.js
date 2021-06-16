/*
Work on the problem above to dynamically print the name of each animal and prepend it with ‘this is’ conditionally.
Print ‘something else’ if the name doesn’t equal any of the names in the list.

*/

let myArray = ["cat", "rabbit", "pigeon", "parrot", "goldfish", "something else"];

myArray.forEach(printAnimalName);

function printAnimalName(animalName){
    
   // if ( (animalName !== "cat") ||(animalName !== "rabbit")||(animalName !== "pigeon")||(animalName !== "parrot")||(animalName !== "goldfish") )
   // console.log("something else");
   // else
   console.log("This is a",animalName);
}
