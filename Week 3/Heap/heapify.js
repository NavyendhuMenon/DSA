class Heap {
    constructor() {
        this.heap = [];
    }

    getParentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    getLeftChild(index) {
        return 2 * index + 1;
    }

    getRightChild(index) {
        return 2 * index + 2;
    }

    swap(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }

    insert(value) {
        this.heap.push(value); // Add value to the heap
        this.heapifyUp(); // Restore heap property
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = this.getParentIndex(index);
            if (this.heap[index] < this.heap[parentIndex]) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;

        while (this.getLeftChild(index) < length) {
            let smallChildIndex = this.getLeftChild(index);
            let rightChildIndex = this.getRightChild(index);

            // Check if the right child exists and is smaller than the left child
            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallChildIndex]) {
                smallChildIndex = rightChildIndex;
            }

            // If the current node is greater than the smallest child, swap them
            if (this.heap[index] > this.heap[smallChildIndex]) {
                this.swap(index, smallChildIndex);
                index = smallChildIndex; // Move to the next index
            } else {
                break;
            }
        }
    }

    extractMin() {
        if (this.heap.length === 0) {
            return null; // Heap is empty
        }
        const min = this.heap[0]; // The minimum value
        const last = this.heap.pop(); // Remove the last element
        if (this.heap.length > 0) {
            this.heap[0] = last; // Replace root with the last element
            this.heapifyDown(); // Restore heap property
        }
        return min; // Return the minimum value
    }

    heapSort() {
        const sortedArray = [];
        const originalHeap = [...this.heap]; // Make a copy of the original heap

        while (this.heap.length > 0) {
            sortedArray.push(this.extractMin()); // Extract the min and add to sorted array
        }

        this.heap = originalHeap; // Restore original heap
        return sortedArray; // Return sorted array
    }

    printHeap() {
        console.log(this.heap); // Display the current state of the heap
    }
}

// Example usage
const minHeap = new Heap();
minHeap.insert(5);
minHeap.insert(3);
minHeap.insert(8);
minHeap.insert(1);
minHeap.insert(6);

console.log("Heap before sorting:");
minHeap.printHeap();

const sortedArray = minHeap.heapSort(); // Perform heap sort
console.log("Sorted array:");
console.log(sortedArray); // Displays the sorted array