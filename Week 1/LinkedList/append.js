

class Node {
    constructor (value){

        this.value = value
        this.next = null

    }
}



class LinkedList {
    constructor (){

        this.head = null
        this.size = 0

    }

    isEmpty (){
        return this.size === 0
    }

     getSize (){
        return this.size 
    }

    append(value){
        let node = new Node (value)

        if(this.isEmpty()){
            this.head = node
        }else{
           let curr = this.head
            while (curr.next!==null){
               curr = curr.next  // Traverse to the end of the list
            }
            curr.next = node  // Append the new node at the end
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

const list = new LinkedList();
console.log("isEmpty?", list.isEmpty());
list.append(20);
list.append(30);
list.append(40);
list.print();
console.log("isEmpty?", list.isEmpty());
console.log("Size of the list:", list.getSize());




