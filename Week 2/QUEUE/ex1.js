
class Queue {

    constructor(){
        this.items = []
    }

    enqueue(ele){
        this.items.push(ele);
    }

    dequeue (){
        return this.items.shift();
    }

    isEmpty(){
        return this.items.length === 0;
    }

    peek(){
        if (!this.isEmpty()){
            return this.items[0];
        }
        return null;
    }
   
    size(){
        return this.items.length;
    }

    print(){
        console.log(this.items.toString());
    }
}


class queue1{
    constructor (){
        this.item =[]
    }

    enqueue(el){
        this.item.push(el)
    }

    dequeue(el){
        this.item.shift (el)
    }

    
}


const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.peek()); 
queue.print();            
console.log(queue.size()); 
queue.dequeue();
queue.print();            
console.log(queue.size()); 