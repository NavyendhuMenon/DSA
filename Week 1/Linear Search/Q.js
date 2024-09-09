
//Find an Element in an Array

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; 
        }
    }
    return -1; 
}

let arr = [3, 5, 1, 9, 2];
console.log(linearSearch(arr, 9)); 





