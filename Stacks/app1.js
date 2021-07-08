class Stack{
    constructor(){
        this.items = ["My","Name","Is", "Rafat"];
        this.size = 10;
    }

    push(input){
        this.items.push(input);
        //this.size++;
    }

    pop(){
        this.items.pop();
        //this.size--;
    }

    peek(){
        //find last item
        console.log(this.items[this.items.length-1]);
    }

    isEmpty(){
        if (this.items.length == 0){
        console.log("Its Empty");}
        else
        console.log("Its NOT Empty");;
    }

    printStack(){

        for (let i=0; i < this.items.length; i++){
            console.log(this.items[i]);
        }
    }

    size(){
        return this.size;
    }
}

let myStack = new Stack();
// myStack.push("Fatima");
// myStack.printStack();
// myStack.pop();
// myStack.printStack();
myStack.peek();
//myStack.printStack();
//myStack.size();
myStack.isEmpty();