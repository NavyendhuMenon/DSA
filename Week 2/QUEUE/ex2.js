class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(ele) {
        this.items.push(ele);
    }

    dequeue() {
        return this.items.shift();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[0];
        }
        return null;
    }

    size() {
        return this.items.length;
    }

    print() {
        console.log(this.items.toString());
    }

    reverseKElements(k) {
        if (k > this.size()) return;

        let stack = [];
        
        // Dequeue the first k elements and push them onto a stack
        for (let i = 0; i < k; i++) {
            stack.push(this.dequeue());
        }
        
        // Enqueue the elements from the stack back to the queue
        while (stack.length > 0) {
            this.enqueue(stack.pop());
        }
        
        // Move the remaining elements from the front to the back of the queue
        for (let i = 0; i < this.size() - k; i++) {
            this.enqueue(this.dequeue());
        }
    }
}


const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.reverseKElements(3);
queue.print(); 


