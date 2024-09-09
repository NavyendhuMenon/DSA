class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    printList() {
        let current = this.head;
        let result = '';
        while (current !== null) {
            result += `${current.value} --> `;
            current = current.next;
        }
        result += 'null';
        console.log(result);
    }
}

const singlyList = new SinglyLinkedList();
singlyList.prepend(10);
singlyList.prepend(20);
singlyList.prepend(30);
singlyList.printList(); 
