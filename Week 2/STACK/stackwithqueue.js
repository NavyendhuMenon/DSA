

//stack using queue simple technique 


class StackWithQueue{

    constructor(){

        this.queue =[]
    }


    enqueue(el){

        this.queue.push(el)
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Empty queue");
            return null; // or throw an error
        }
        return this.queue.shift();
    }


    push(el){

        this.enqueue(el)

        let size = this.queue.length

        for(let i=0; i<size-1; i++){
          
            this.enqueue(this.dequeue())
        }
    }

    pop(){

        if(this.isEmpty()){
            return null
        }

        return this.dequeue()
    }

    isEmpty(){

        return this.queue.length===0
    }

    size(){
        return this.queue.length
    }

    peek(){

        return this.queue[0]
    }


    display(){

        return[...this.queue]
    }

}


const stack = new StackWithQueue();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.display()); // Output: [3, 2, 1]
console.log(stack.peek());     // Output: 3
console.log(stack.pop());      // Output: 3
console.log(stack.display());   // Output: [2, 1]
console.log(stack.isEmpty());   // Output: false
console.log(stack.pop());      // Output: 2
console.log(stack.pop());      // Output: 1
console.log(stack.isEmpty());   // Output: true