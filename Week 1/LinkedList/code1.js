//linkedk list


//value: This property holds the data or value that the node stores.
//next: This property is a reference (or pointer) to the next node in the list. If next is null, it means this node is the last node in the list.


class  Node {

    constructor (value){
        this.value = value
        this.next = null
    }
}

// head: A reference to the first node in the linked list. Initially, it's null because the list is empty when first created.
//size: A property that keeps track of the number of nodes in the linked list. Initially, it's set to 0 because the list starts empty

class linkedList {
    constructor (){
        this.head = null
        this.size =0
    }

    
 isEmpty (){
    return this.size ===0
 }

 getSize(){
    return this.size
 }
}


const list = new linkedList()


console.log("List is empty ?", list.isEmpty())
console.log("list's size is:", list.getSize())