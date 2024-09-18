class Stack {

    constructor(limit){

        this.item =[]
        this.limit =limit
    }


    isEmpty(){

        return this.item.length===0
    }


    push(ele){

        this.item.length>= this.limit ? console.log("Overflow") : this.item.push(ele)
    }

    pop(){

        return this.isEmpty() ? console.log("Underflow") : this.item.pop()
    }

    display(){
        console.log(this.item)
    }

    reverse(){

        let temp=[]

        while(!this.isEmpty()){
            temp.push(this.pop())
        }


        for(let i=0; i<temp.length; i++){

            this.push(temp[i])
        }
    }
}


let stack = new Stack(10)

stack.push(100)
stack.push(10)
stack.push(1)
stack.push(200)
stack.push(20)
stack.push(999)
stack.push(163)

stack.display()

stack.reverse()

console.log("Reversed Stack:");
stack.display();