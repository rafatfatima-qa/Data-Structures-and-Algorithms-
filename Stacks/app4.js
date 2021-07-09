/*
Implement following methods:
clear: a method that clears stack
toString: a method that converts all members of stack into string
*/

class Stack{
    constructor(){
        this.items = ["My","Name","Is", "Rafat"];
        this.size = 10;
    }
    
    stackclear(){
        this.items=[]
        this.size =0;
        console.log('Stack is cleared!')
        return this.items;
    }

    toStringMethod(){
        let str;
        str = this.items.toString();
        console.log(str);
    }
    printStack(){

        for (let i=0; i < this.items.length; i++){
            console.log(this.items[i]);
        }
    }
}

let myStack = new Stack();
myStack.toStringMethod();
myStack.stackclear();


