function findKthSmallest(arr, K) {
    
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        
        
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }

    
    return arr[K - 1];
}


const unsortedArray = [7, 10, 4, 3, 20, 15];
const K = 3;
console.log(findKthSmallest(unsortedArray, K));
