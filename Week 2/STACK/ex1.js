class Stack {

    constructor() {
        this.items = [];
    }

    push(element) {
        this.items.push(element);
    }

    pop() {
        if (this.isEmpty()) {
            return "Stack is empty";
        }
        return this.items.pop();
    }

    peek() {
        return this.isEmpty() ? "Stack is empty" : this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
}



class Stack2{
    constructor(){
        this.item =[]
    }

    push(el){
        this.item.push(el)
    }

    pop(ele){
        if (this.isEmpty()){
            return "stack is empty"
        }else{
            this.item.pop(ele)
        }
    }
    peek() {
        return this.isEmpty() ? "Stack is empty" : this.item[this.item.length - 1];
    }


    isEmpty(){
        return this.item.length===0
    }

    size(){
        return this.item.length
    }
}


const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek());  
console.log(stack.pop());   
console.log(stack.size());  
console.log(stack.isEmpty());
