
//kth element in an array  and //merge k sorted arrays

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(num) {
        this.heap.push(num);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] >= this.heap[parentIndex]) break;
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    removeMin() {
        if (this.heap.length === 0) return null;
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this.siftDown(0);
        }
        return min;
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

    size() {
        return this.heap.length;
    }
}

function findKthLargest(nums, k) {
    const minHeap = new MinHeap();
    for (let num of nums) {
        minHeap.insert(num);
        if (minHeap.size() > k) {
            minHeap.removeMin();
        }
    }
    return minHeap.removeMin();
}

function mergeKArrays(arrays) {
    const minHeap = new MinHeap();
    const result = [];

    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i].length > 0) {
            minHeap.insert({ value: arrays[i][0], arrayIndex: i, elementIndex: 0 });
        }
    }

    while (minHeap.size() > 0) {
        const { value, arrayIndex, elementIndex } = minHeap.removeMin();
        result.push(value);

        if (elementIndex + 1 < arrays[arrayIndex].length) {
            minHeap.insert({ value: arrays[arrayIndex][elementIndex + 1], arrayIndex, elementIndex: elementIndex + 1 });
        }
    }

    return result;
}


const arrays = [[1, 4, 7], [2, 5, 8], [3, 6, 9]]
console.log("Merged Sorted Array:", mergeKArrays(arrays))


const nums = [3, 2, 1, 5, 6, 4]
const k = 2
console.log("Kth Largest Element:", findKthLargest(nums, k))