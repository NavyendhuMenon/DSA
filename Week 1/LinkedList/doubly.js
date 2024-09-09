class DoublyNode {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    append(value) {
        const newNode = new DoublyNode(value);
        if (this.isEmpty()) {
            this.head = this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.size++;
    }

    printList() {
        let current = this.head;
        let result = '';
        while (current !== null) {
            result += `${current.value} <--> `;
            current = current.next;
        }
        result += 'null';
        console.log(result);
    }

    printReverse() {
        let current = this.tail;
        let result = '';
        while (current !== null) {
            result += `${current.value} <--> `;
            current = current.prev;
        }
        result += 'null';
        console.log(result);
    }
}

const doublyList = new DoublyLinkedList();
doublyList.append(10);
doublyList.append(20);
doublyList.append(30);
doublyList.printList(); 
doublyList.printReverse(); 
