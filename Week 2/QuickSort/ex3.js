function quickSort(arr, key) {
    if (arr.length < 2) return arr;

    let pivot = arr[arr.length - 1][key];
    let left = [];
    let right = [];

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i][key] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left, key), arr[arr.length - 1], ...quickSort(right, key)];
}


const array4 = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];
console.log(quickSort(array4, 'age'));
