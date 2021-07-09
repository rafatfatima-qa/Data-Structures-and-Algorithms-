/*
Implement following methods:
isEmpty: a method that checks whether the given stack is empty or not. It will return a boolean
isFull: a method that checks whether the given stack is full or not. Hint: Compare the length of array with size
*/
class Stack{
    constructor(){
        this.items = ["My","Name","Is", "Rafat"];
        this.size = 10;
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
            console.log("Stack is Full");
            }
            else{
            console.log("Stack is Empty");
            } 
    }
    printStack(){

        for (let i=0; i < this.items.length; i++){
            console.log(this.items[i]);
        }
    }
}

let myStack = new Stack();

myStack.isEmpty();

myStack.isFull();
