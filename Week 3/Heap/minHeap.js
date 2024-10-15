class MinHeap {
    constructor() {
        this.heap = [];
    }

    buildHeap(array) {
        this.heap = array;
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.siftDown(i);
        }
    }

    insert(value) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1);
    }

    remove() {
        if (this.heap.length === 0) return null;
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.siftDown(0);
        return min;
    }

    siftUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2)
            if (this.heap[index] >= this.heap[parentIndex]) break
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex
        }
    }

    siftDown(index) {
        const length = this.heap.length;
        while (index < length) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let smallest = index;

            if (leftChildIndex < length && this.heap[leftChildIndex] < this.heap[smallest]) {
                smallest = leftChildIndex;
            }
            if (rightChildIndex < length && this.heap[rightChildIndex] < this.heap[smallest]) {
                smallest = rightChildIndex;
            }
            if (smallest === index) break;

            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }
}


const minHeap = new MinHeap();
minHeap.buildHeap([5, 3, 8, 4, 1, 7]);
minHeap.insert(2);
console.log("Removed:", minHeap.remove())
console.log("Heap:", minHeap.heap)
