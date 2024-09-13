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

    areParenthesesBalanced(s) {
        for (let char of s) {
            if (char === '(') {
                this.enqueue(char);
            } else if (char === ')') {
                if (this.isEmpty()) {
                    return false;
                }
                this.dequeue();
            }
        }
        return this.isEmpty();
    }
}


const queue = new Queue();
console.log(queue.areParenthesesBalanced("(()())")); // Output: true
console.log(queue.areParenthesesBalanced("(()"));    // Output: false
