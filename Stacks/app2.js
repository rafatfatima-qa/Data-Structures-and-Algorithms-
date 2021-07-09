/*
Implement following methods. Don’t forget to increase and decrease the size when you add or remove an element
from the stack.
push: a method through that you can add a value to the stack
peek: a method through which you can get the value on the top of stack
pop: a method through which you can remove the first element of the stack
*/

class Stack{
    constructor(){
        this.items = ["My","Name","Is", "Rafat"];
        this.size = 10;
    }

push1(input){
    this.items.push(input);
    this.size++;
}

push2(inputValue){

    this.items.length = this.items.length + 1;
    
    this.items[this.items.length - 1] = inputValue;
    
    console.log(this.items);
    
}

pop(){
    this.items.pop();
    this.size--;
}

peek(){
    //find last item
    console.log(this.items[this.items.length-1]);
}
printStack(){

    for (let i=0; i < this.items.length; i++){
        console.log(this.items[i]);
    }
}

}

let myStack = new Stack();
myStack.push1("Fatima");
myStack.printStack();

myStack.push2("Push-2"); 

myStack.pop();
myStack.printStack();

myStack.peek();
myStack.printStack();





 