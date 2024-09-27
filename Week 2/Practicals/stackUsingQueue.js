class MyQueue {
    
    constructor() {
        this.items = [];
    }

    enqueue(el) {
        this.items.push(el);
    }

    dequeue() {
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}

class MyStack {
    constructor() {
        this.queue = new MyQueue(); 
    }

    push(el) {
        this.queue.enqueue(el);

        let size = this.queue.size();
        while (size > 1) {
            this.queue.enqueue(this.queue.dequeue());
            size--;
        }
    }

    pop() {
        return this.queue.dequeue();
    }

    top() {
        return this.queue.peek();
    }

    empty() {
        return this.queue.isEmpty();
    }
}
