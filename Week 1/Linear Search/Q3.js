
//count the occurance

function countOccurrences(arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
}

let arr = [3, 5, 3, 9, 3];
console.log(countOccurrences(arr, 3)); 
