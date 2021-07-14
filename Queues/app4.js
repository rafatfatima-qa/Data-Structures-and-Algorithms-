/*
Implement following methods:
clear: a method that clears queue
toString: a method that converts all members of queue into string
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
    
    toStringMethod(){
        let str;
        str = this.items.toString();
        console.log(str);
    }
    queueClear(){
        this.items=[]
        this.size =0;
        console.log('Queue is cleared!')
        return this.items;
    }


}

let myQueue = new Queue();

myQueue.toStringMethod();
myQueue.queueClear();

