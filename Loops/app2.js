/*
You are given an array of pet animals like [‘cat’, ‘rabbit’, ‘pigeon’, ‘parrot’, ‘goldfish’].
You need to loop over it and then if you encounter the name of rabbit, print out ‘this is rabbit’.
When you don’t get the name of a rabbit, print ‘this is not a rabbit’. 

*/

let myArray = ["cat", "rabbit", "pigeon", "parrot", "goldfish"];

myArray.forEach(checkAnimalFunc);

function checkAnimalFunc(animalName){

    if (animalName == "rabbit")
    console.log("This is a rabbit");

    else
    console.log("This is NOT a rabbit");


}

