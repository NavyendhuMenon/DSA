
class Node {
    constructor(value) {
        this.value = value; // The value of the node
        this.next = null;  // Pointer to the next node
    }
}

class LinkedList {
    constructor() {
        this.head = null; // The head of the list
    }

    append(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    printList() {

        let current = this.head;
        let listValue = '';
        while (current ) {
            listValue += `${current.value} --> `;
            current = current.next;
        }

        
        console.log(listValue);
    }
}

function arrayToLinkedList(arr) {
    const linkedList = new LinkedList();
    for (const item of arr) {
        linkedList.append(item);
    }
    return linkedList;
}

const array = [1, 2, 3, 4, 5];
const linkedList = arrayToLinkedList(array);
linkedList.printList(); 
