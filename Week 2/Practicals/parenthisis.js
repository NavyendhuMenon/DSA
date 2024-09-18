function isBalanced(s) {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        
        if (brackets[char]) {
            // If it's an opening bracket, push it to the stack
            stack.push(char);
        } else {
            // If it's a closing bracket
            if (stack.length === 0) {
                // Stack is empty but found a closing bracket
                return false;
            }
            const topElement = stack.pop();
            if (brackets[topElement] !== char) {
                
                return false;
            }
        }
    }

   
    return stack.length === 0;
}

console.log(isBalanced("({[]})")); // true
console.log(isBalanced("(]")); // false
console.log(isBalanced("([{}])")); // true
console.log(isBalanced("({[)]}")); // false
