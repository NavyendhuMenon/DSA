//remove even number from the stack



class MyStack{

    constructor(){

        this.items=[]
    }

    push(el){

        this.items.push(el)
    }

    pop(){
        return this.items.pop()
    }

    size(){
        return this.items.length
    }
    isEmpty(){

        return this.items.length===0
    }

    top(){
        this.items[this.items.length-1]
    }

    removeEven(){

        let temp = new MyStack

        while(!this.isEmpty()){

            let current = this.pop()
            
             if(current%2 !==0){

               temp.push(current)


             }
        }


        while(!temp.isEmpty()){
            this.push(temp.pop())
        }
    }

    print() {
        console.log(this.items);
    }
}

const stack = new MyStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);

console.log("Original stack:");
stack.print(); // Output: [1, 2, 3, 4, 5]

stack.removeEven();

console.log("Stack after removing even numbers:");
stack.print()