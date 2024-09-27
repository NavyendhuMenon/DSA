function isBalanced(s) {
    const stack = [];
    const brackets = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        
        if (brackets[char]) {
            stack.push(char);
        } else {
        
            if (stack.length === 0) {
                
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
