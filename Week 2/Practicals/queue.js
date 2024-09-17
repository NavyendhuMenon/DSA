



class Queue {


    constructor(){

        this.item =[]
    }


    enqueue(el) {
        this.item.push(el);  
    }

    dequeue() {
        if (this.item.length === 0) {
            console.log("Queue Underflow! Cannot dequeue.");
            return;
        }
        return this.item.shift()
    }

    display (){

        console.log(this.item)
    }
}


let queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

queue.display();  

queue.dequeue();  
queue.display();
queue.dequeue();
queue.dequeue();  
queue.dequeue();  
