/*
Implement following methods:
isEmpty: a method that checks whether the given queue is empty or not. It will return a boolean
isFull: a method that checks whether the given queue is full or not. Hint: Compare the length of array with size
*/

class Queue{
    constructor(){
        this.items = ["First","Second","Third", "Fourth"];
        this.size = 10;
    }
    
    printQueue(){

        for (let i=0; i < this.items.length; i++){
            console.log(this.items[i]);
        }
    }
    
    isEmpty(){
        if (this.items.length == 0){
        console.log("Its Empty");
        }
        else{
        console.log("Its NOT Empty");
        }
    }

    isFull(){
        if (this.items.length != 0){
            console.log("Queue is Full");
            }
            else{
            console.log("Queue is Empty");
            } 
    }

}

let myQueue = new Queue();

myQueue.isEmpty();
myQueue.isFull();
