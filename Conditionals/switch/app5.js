/*

You need to write a function that prints out ‘wild animals’ if the names of lion and leopard are passed to it.
However, if I pass the names of cats and rabbits to it, it prints ‘pet animals’. 
However, if I pass any other name to it, it says ‘unknown’

*/

function printAnimals() {

    let animalName = "leopard";

    switch(animalName){

    
    case "lion":
    case "Lion":
    case "leopard":
    case "Leopard": 

        console.log("Wild Animals");
        break;

    case "cat":
    case "rabbit":

        console.log("Pet Animals");
        break;

    default:
        console.log("Unknown");
        break;
    }
}

printAnimals();