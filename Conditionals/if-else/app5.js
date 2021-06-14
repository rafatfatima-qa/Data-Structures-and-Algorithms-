/*

You need to write a function that prints out ‘wild animals’ if the names of lion and leopard are passed to it.
However, if I pass the names of cats and rabbits to it, it prints ‘pet animals’. 
However, if I pass any other name to it, it says ‘unknown’

*/

function printAnimals() {

    let animalName = "Lion";
    if ((animalName == "lion") || (animalName == "Lion") || (animalName == "leopard") || (animalName == "Leopard")) {

        console.log("Wild Animals");
    }
    else if ((animalName == "cat") || (animalName == "rabbit")) {

        console.log("Pet Animals");
    }
    else
        console.log("Unknown");

}

printAnimals();