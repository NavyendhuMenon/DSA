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



function areParenthesesBalanced(str) {
    const stack = new Stack();
    const opening = ['(', '{', '['];
    const closing = [')', '}', ']'];

    for (const char of str) {
        if (opening.includes(char)) {
            stack.push(char);
        } else if (closing.includes(char)) {
            const lastOpening = stack.pop();
            if (opening.indexOf(lastOpening) !== closing.indexOf(char)) {
                return false;
            }
        }
    }
    return stack.isEmpty();
}


console.log(areParenthesesBalanced("{[()]}")); 
console.log(areParenthesesBalanced("{[(])}")); 
