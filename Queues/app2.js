/*
Implement following methods. Don’t forget to increase and decrease the size when you add or remove an element from the queue.
enqueue: a method through that you can add a value to the queue
peek: a method through which you can get the value on the top of queue
dequeue: a method through which you can remove the first element of the queue
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
    

    peek(){
        //find last item
        console.log(this.items[this.items.length - this.items.length]); // means 0 index
    }

    enqueue(input){
        if (this.items.length > this.size){
            console.log("Queue overflow")
        }
        else{
        this.items.push(input);
        this.size++;
        }
    }
    enqueueCustomMethod(inputValue){
   
            this.items.length = this.items.length + 1;
            
            this.items[this.items.length - 1] = inputValue;
            
            console.log(this.items);
       
    }
    dequeue(){

        if (this.items.length = 0){
            console.log("Queue underflow")
        }

        else{
        this.items.shift();
        this.size--; 
        }
    }

    dequeueCustomMethod(){
    /* By using for Loop */
        for (let i = 0; i<this.items.length-1; i++){

            this.items[i] = this.items[i+1];
            console.log(this.items[i]);
         }
                        
     /* By using While Loop */

        let j=0;
        while (j < this.items.length-1){
            this.items[j] = this.items[j+1];
            console.log(this.items[j]);
            j++;
        }
        
    }
}

let myQueue = new Queue();

myQueue.enqueue("Fifth");
myQueue.printQueue();

myQueue.dequeue();
myQueue.printQueue();

myQueue.dequeueCustomMethod();
myQueue.printQueue();

myQueue.peek();