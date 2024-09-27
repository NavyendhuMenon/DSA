

class Linkedlist{

    constructor (data){
        this.data = data
        this.next = null
    }
}



class Stack {

    constructor(){
        this.top = null
    }


    push (el){
        
        let node = new Linkedlist(el)
        node.next = this.top
        this.top = node
    }

    pop (){

        if (this.isEmpty()){

            console.log("Underflow")

            return null
        }

        const popData = this.top.data
        this.top = this.top.next

        return popData
    }

    isEmpty() {
        return this.top === null;
    }

    display() {
        let current = this.top;
        const result = [];
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        console.log("Stack:", result.join(" -> "));
    }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.display();  // Stack: 30 -> 20 -> 10

console.log("Popped:", stack.pop());  // Popped: 30

stack.display(); 