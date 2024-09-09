
class Node {
    constructor (value){
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor (){
        this.head = null
        this.size = 0
    }

    isEmpty(){
     return this.size===0
    }

    getSize(){
        return this.size
    }

    prepend(value){
        let node = new Node(value)
        if (this.size===0){
            this.head = node
        }else{
            node.next = this.head
            this.head = node
        }

        this.size++
    }

    print(){
        if (this.isEmpty()){
            console.log("empty node")
        }else{
            let curr = this.head
            let listValue= ''

            while(curr){
                listValue += `${curr.value} --> `
                curr = curr.next
            }
            
            console.log(listValue)
        }

        
    }
}



const list = new linkedList();
console.log("isEmpty?", list.isEmpty());  // Output: true
list.prepend(20);
list.print();  // Output: 20 -> null
list.prepend(10);
list.prepend(20);
list.prepend(30);
list.print(); 
 // Output: 10 -> 20 -> null
console.log("isEmpty?", list.isEmpty());  // Output: false
console.log("Size of the list:", list.getSize());  // Output: 2