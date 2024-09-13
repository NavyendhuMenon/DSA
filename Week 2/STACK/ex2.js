class Stack {
    constructor() {
        this.stack = [];
    }

    // Add an element to the stack
    push(element) {
        this.stack.push(element);
    }

    // Remove an element from the stack
    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.stack.pop();
    }

    // Print all elements in the stack
    print() {
        console.log(this.stack);
    }

    // Check if the stack is empty
    isEmpty() {
        return this.stack.length === 0;
    }
}


const stack = new Stack();
stack.push(5);
stack.push(10);
stack.print();           
console.log(stack.pop()); 
stack.print();           