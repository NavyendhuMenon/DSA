


class Stack {

    constructor (limit){

        this.item=[]
        this.limit =limit

    }

    push (ele){

        if(this.item.length>= this.limit){

            console.log("Stack Overflow! Cannot push more elements.")

        }

        this.item.push()

    }

    pop (){

        if (this.item.length===0){
            console.log("Stack underflow!!, cannot pop")
        }

        this.item.pop() 
    }

    display() {
        console.log(this.item);
    }


    
}


let stack = new Stack (3)


stack.push(10);
stack.push(20);
stack.push(30);

stack.display();

stack.pop();  
stack.display();